// const express = require("express");
// const http = require("http");
// const { Server } = require("socket.io");

// const app = express();
// const server = http.createServer(app);
// const io = new Server(server, {
//   cors: {},
// });

// io.on("connection", (socket) => {
//   console.log("A user connected");
//   io.emit("message", "Hello World");

// });

// server.listen(4000, () => {
//   console.log("Server running on http://localhost:4000");
// });









const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {},
});

io.on("connection", (socket) => {
  io.emit("msg", "hello fgdrrger 111 world");
});

server.listen("4000", () => console.log("server started"));
