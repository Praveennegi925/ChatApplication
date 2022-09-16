// socket :-

import { io } from "socket.io-client";

const socket = io("http://localhost:8000");

window.onload = function () {
  const form = document.getElementById("message-container");

  const messageInput = document.getElementById("messageInput");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const message = messageInput.value;
    append(`you : ${message}`, "right");
    socket.emit("send", message);
    messageInput.value="";
  });
};
 
const name = prompt(" Enter your name to join Chat");

socket.emit("new-user-joined", name);


const append = (message, position) => {
  const messageInput = document.querySelector(".container");
  const newElement = document.createElement("div");
  newElement.innerText = message;
  newElement.classList.add("message");
  newElement.classList.add(position);
  messageInput.append(newElement);

  
};

const Newappend = (message, position) => {
  const messageInput = document.querySelector(".container");
  const newElement = document.createElement("div");
  newElement.innerText = message;
  newElement.classList.add("joined");
  newElement.classList.add(position);
  messageInput.append(newElement);
 
};

socket.on("user-joined", (name) => {
 Newappend(`${name} joined the chat`, "right");
});

socket.on("receive", (data) => {
  append(`${data.name}: ${data.message}`, "left");
});
