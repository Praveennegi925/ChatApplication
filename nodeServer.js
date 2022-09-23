// node server :-

const io = require("socket.io")(3000, {
  cors: {
    origin: "*",
  },
});
const users = {};

io.on("connection", (socket) => {
  socket.on("new-user-joined", (name) => {
    users[socket.id] = name;

    socket.broadcast.emit("user-joined", name);
  });
  socket.on("send", (message) => {
    socket.broadcast.emit("receive", {
      message: message,
      name: users[socket.id],
    });
  });

  socket.on("typing", (name) => {
    socket.broadcast.emit("typingEvent", name);
  });

  socket.on("removetype", () => {
    socket.broadcast.emit("removetypingEvent");
  });

  socket.on("disconnect", (name) => {
    name = users[socket.id];
    socket.broadcast.emit("leave", name);
    delete users[socket.id];
  });
});
