// client side :-

import { io } from "socket.io-client";

const socket = io("http://localhost:3000");


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

  // typing event listener:-

  messageInput.addEventListener("focus", () => {
    console.log("hey");
    socket.emit("typing", name);
  });

  messageInput.addEventListener("blur", () => {
    console.log("blur");
    socket.emit("removetype");
  });
 
};
 // Asking username by prompt:-

const name = prompt(" Enter your name to join Chat");

// emitting event to node server from client server:-

socket.emit("new-user-joined", name);


// for messages:-

const append = (message, position) => {
  const messageInput = document.querySelector(".chat-box");
  const newElement = document.createElement("div");
  newElement.innerText = message;
  newElement.classList.add("message");
  newElement.classList.add(position);
  messageInput.append(newElement);
};

//for new user joined or leave:-

const join = (message, position) => {
  const messageInput = document.querySelector(".chat-box");
  const newElement = document.createElement("div");
  newElement.innerText = message;
  newElement.classList.add("joined");
  newElement.classList.add(position);
  messageInput.append(newElement);
};
const leaved = (message, position) => {
  const messageInput = document.querySelector(".chat-box");
  const newElement = document.createElement("div");
  newElement.innerText = message;
  newElement.classList.add("leave");
  newElement.classList.add(position);
  messageInput.append(newElement);
};

//typing functionality:-

const typing = (name) => {
  console.log('hey')
  const element = document.querySelector(".chat-box");
  const newElement = document.createElement("div");
  newElement.classList.add("type");
  newElement.classList.add("left");
  newElement.classList.add("typing");
  newElement.innerText = `${name} is typing...`;
  element.append(newElement);
};

const removeTyping = () => {
  document.querySelector(".typing").remove();
}; 

//online and offline on Dom:-
// const newJoin="Online";


// removing online when user leave the chat:-

const RemoveOnline=()=>{
  document.querySelector('.removeOnline').remove();
}



// Addding userlist:-

const addUser=(name)=>{
  const element = document.querySelector(".sidebar");
  const newElement=document.createElement("p");
  newElement.classList.add('para');
  newElement.classList.add('removeOnline');   //just for target 
  newElement.innerHTML=`${name} <span class="dot"></span>`;
  element.append(newElement);
}



//Listening all the events emitted by node  server:-

socket.on("user-joined", (name) => {
  join(`${name} joined the chat`, "right");
  addUser(name);
});

socket.on("receive", (data) => {
  append(`${data.name}: ${data.message}`, "left");
});

socket.on("leave", (name) => {
  leaved(`${name} : left the Chat`, "right");
  RemoveOnline();

});

socket.on("typingEvent", (name) => {
  typing(name);
});
socket.on("removetypingEvent", () => {
  removeTyping();
});
socket.on("Userlist",()=>{
  addUser();
})
