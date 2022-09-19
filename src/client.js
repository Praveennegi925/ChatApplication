// client side :-

import { io } from "socket.io-client";

const socket = io("http://localhost:8000");

window.onload = function () {
  const form = document.getElementById("message-container");

  const messageInput = document.getElementById("messageInput");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const message = messageInput.value;
    append(`you : ${message}`, "right");

    // emitting event to node server from client server:-

    socket.emit("send", message);
    messageInput.value = "";
  });
};

const name = prompt(" Enter your name to join Chat");

// emitting event to node server from client server:-

socket.emit("new-user-joined", name);

// for messages:-

const append = (message, position) => {
  const messageInput = document.querySelector(".container");
  const newElement = document.createElement("div");
  newElement.innerText = message;
  newElement.classList.add("message");
  newElement.classList.add(position);
  messageInput.append(newElement);
};


//for new user joined or leave:- 

const Newappend = (message, position) => {
  const messageInput = document.querySelector(".container");
  const newElement = document.createElement("div");
  newElement.innerText = message;
  newElement.classList.add("joined");
  newElement.classList.add(position);
  messageInput.append(newElement);
};

//Listening all the events emitted by node  server:-

socket.on("user-joined", (name) => {
  Newappend(`${name} joined the chat`, "right");
});

socket.on("receive", (data) => {
  append(`${data.name}: ${data.message}`, "left");
});
socket.on("leave", (name) => {
  Newappend(`${name} : left the Chat`, "right");
});
