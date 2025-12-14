// server.ts
import { Server } from "socket.io";
import http from "http";

const httpServer = http.createServer();
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000", // Change to your domain in production
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
      io.to(waitingUser).emit("matched", { room, peerId: socket.id });
      socket.emit("matched", { room, peerId: waitingUser });
      waitingUser = null;
    } else {
      waitingUser = socket.id;
      socket.emit("waiting");
    }
  });

  socket.on("offer", ({ offer, room }) => {
    socket.to(room).emit("offer", { offer, from: socket.id });
  });

  socket.on("answer", ({ answer, room }) => {
    socket.to(room).emit("answer", { answer, from: socket.id });
  });

  socket.on("ice-candidate", ({ candidate, room }) => {
    socket.to(room).emit("ice-candidate", { candidate, from: socket.id });
  });

  socket.on("next", () => {
    socket.emit("waiting");
    if (waitingUser === socket.id) waitingUser = null;
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
    if (waitingUser === socket.id) waitingUser = null;
    socket.broadcast.emit("partner-disconnected");
  });
});

httpServer.listen(3000, () => {
  console.log("Signaling server running on http://localhost:3000");
});