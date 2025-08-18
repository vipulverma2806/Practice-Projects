// const express = require("express");
// const http = require("http");
// const { Server } = require("socket.io");

// const app = express();
// const server = http.createServer(app);
// const io = new Server(server, { cors: { origin: "*" } });

// io.on("connection", (socket) => {
//   socket.emit("message", "Hello from server!");
// //   console.log(socket.id);

//   socket.on("message", (msg) => console.log("Client:", msg,socket.id));
// });

// server.listen(4000, () => console.log("Server on 4000"));




const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

io.on("connection", socket => {
  socket.on("chat", ({to ,msg}) => io.to(to).emit("chat", msg));
});

server.listen(4000, () => console.log("Server running on 4000"));
