/* eslint-disable @typescript-eslint/no-require-imports */
const http = require('http');
const { Server } = require('socket.io');

const PORT = process.env.SIGNALING_PORT || 4000;

const server = http.createServer();
const io = new Server(server, {
  cors: {
    origin: '*',
  },
});

// In-memory matchmaking queue and pairing map
const queue = [];
const pairs = new Map(); // socketId -> partnerSocketId

io.on('connection', (socket) => {
  console.log('socket connected', socket.id);

  socket.on('find', () => {
    // If someone is waiting, pair them
    if (queue.length > 0) {
      const otherId = queue.shift();
      const other = io.sockets.sockets.get(otherId);
      if (!other) {
        // the other disconnected, try again
        socket.emit('waiting');
        queue.push(socket.id);
        return;
      }

      // Save pairing both ways
      pairs.set(socket.id, otherId);
      pairs.set(otherId, socket.id);

      // Decide initiator (first one is false, second is true)
      other.emit('matched', { partner: socket.id, initiator: true });
      socket.emit('matched', { partner: otherId, initiator: false });
      console.log(`paired ${socket.id} <-> ${otherId}`);
    } else {
      queue.push(socket.id);
      socket.emit('waiting');
      console.log(`queued ${socket.id}`);
    }
  });

  socket.on('signal', (data) => {
    // data: { to, signal }
    const { to, signal } = data || {};
    if (!to) return;
    const dest = io.sockets.sockets.get(to);
    if (dest) {
      dest.emit('signal', { from: socket.id, signal });
    }
  });

  // lightweight ping/pong for diagnostics
  socket.on('ping', () => {
    socket.emit('pong');
  });

  socket.on('next', () => {
    // Tell partner if any and unpair both, then re-queue this socket
    const partner = pairs.get(socket.id);
    if (partner) {
      const dest = io.sockets.sockets.get(partner);
      if (dest) dest.emit('partner-left');
      pairs.delete(partner);
      pairs.delete(socket.id);
    }

    // Re-enter queue
    if (!queue.includes(socket.id)) queue.push(socket.id);
    socket.emit('waiting');
    // Try to match immediately
    socket.emit('find');
  });

  socket.on('leave', () => {
    // manual leave: cleanup
    cleanupSocket(socket.id);
  });

  socket.on('disconnect', () => {
    console.log('socket disconnected', socket.id);
    cleanupSocket(socket.id);
  });

  function cleanupSocket(id) {
    // Remove from queue
    const idx = queue.indexOf(id);
    if (idx !== -1) queue.splice(idx, 1);

    // Inform partner
    const partner = pairs.get(id);
    if (partner) {
      const dest = io.sockets.sockets.get(partner);
      if (dest) dest.emit('partner-left');
      pairs.delete(partner);
      pairs.delete(id);
    }
  }
});

server.listen(PORT, () => {
  console.log(`Signaling server running on port ${PORT}`);
});

// Export for tests or programmatic usage
module.exports = { io, server };
