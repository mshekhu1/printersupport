// server.ts
import { Server } from "socket.io";
import http from "http";

const httpServer = http.createServer();
const io = new Server(httpServer, {
  cors: {
    origin: "https://chat-gray-nine.vercel.app", // Change to your domain in production
    methods: ["GET", "POST"]
  },
});

let waitingUser: string | null = null;

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("join", () => {
    if (waitingUser && waitingUser !== socket.id) {
      const room = `${waitingUser}-${socket.id}`;
      socket.join(room);
      // Store the room on socket for cleanup later
      socket.data.room = room;
      // Notify both sides and mark one as initiator (new socket = initiator)
      io.to(waitingUser).emit("matched", { room, peerId: socket.id, initiator: false });
      socket.emit("matched", { room, peerId: waitingUser, initiator: true });
      // Also store room for the waiting user socket via the server-side socket object
      const waitingSock = io.sockets.sockets.get(waitingUser);
      if (waitingSock) waitingSock.data.room = room;
      waitingUser = null;
    } else {
      waitingUser = socket.id;
      socket.emit("waiting");
    }
  });

  socket.on("offer", ({ offer, room }) => {
    console.log(`offer from ${socket.id} for room ${room}`);
    socket.to(room).emit("offer", { offer, from: socket.id });
  });

  socket.on("answer", ({ answer, room }) => {
    console.log(`answer from ${socket.id} for room ${room}`);
    socket.to(room).emit("answer", { answer, from: socket.id });
  });

  socket.on("ice-candidate", ({ candidate, room }) => {
    // candidate can be undefined in some browser states, check before forwarding
    if (candidate) {
      console.log(`ice-candidate from ${socket.id} for room ${room}`);
      socket.to(room).emit("ice-candidate", { candidate, from: socket.id });
    }
  });

  socket.on("next", () => {
    // If the user was in a room, notify the partner and leave
    const room = socket.data.room as string | undefined;
    if (room) {
      socket.to(room).emit('partner-disconnected');
      socket.leave(room);
      delete socket.data.room;
    }
    socket.emit("waiting");
    if (waitingUser === socket.id) waitingUser = null;
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
    if (waitingUser === socket.id) waitingUser = null;
    const room = socket.data.room as string | undefined;
    if (room) {
      socket.to(room).emit('partner-disconnected');
    }
  });
});

const PORT = process.env.PORT ? Number(process.env.PORT) : 4000;
httpServer.listen(PORT, () => {
  console.log(`Signaling server running on http://localhost:${PORT}`);
});