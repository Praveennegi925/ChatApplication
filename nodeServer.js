// node server :-

const io = require("socket.io")(3000, {
  cors: {
    origin: "*",
  },
});
const users = {};
const userlist=[];
io.on("connection", (socket) => {
  socket.on("new-user-joined", (name) => {
    users[socket.id] = name;
    userlist.push(users[socket.id]);
   for(let i=0;i<userlist.length;i++)
   {
    socket.emit("allready-joined", userlist[i]);
   }
    
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

  // we  are not emitting  disconnect it is build in by socket :-

  socket.on("disconnect", (name) => {
    name = users[socket.id];
    socket.broadcast.emit("leave", name);
    socket.broadcast.emit("Remove-Online",name);
    delete users[socket.id];
    userlist.pop();
    
  });
});
