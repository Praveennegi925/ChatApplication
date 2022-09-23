<template>
<div class="chat-body">
<div id="header">
    <h1>{{ title }}</h1>
    <img :src="url" />
  </div>
  <div class="chat-box"></div>
 
  <div class="send">
    <div id="message-container">
      <form >
        <input class="text" type="text" placeholder="Start messaging here" id="messageInput" value="" />
        <input class="send-text" type="submit" value="send" />
      </form>
    </div>
  </div>
  </div>
</template>
<script>
export default {

  data() {
    return {
      url: require("/home/privatedeal/Documents/chat-application/src/assets/msg.png"),
      title: "CHAT APP",
    };
  },
};
</script>

<style >
.chat-body{
  width: 60%;
  margin-left: 10%;
}
#message-container{
  text-align: center;
}
input.text {

  /* margin-left:600px ; */
  padding: 10px 20px;
  width: 500px;
  background-color: rgb(217, 226, 226);
  font-size: 20px;
  border-radius: 10px;
  display: inline-block;
  
}
input.send-text {
  padding: 10px;
  width: 100px;
  
  border-radius: 10px;
  font-size: 20px;
  
}

::placeholder {
  text-align: center;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 20px;
}
.chat-box {
  /* max-width: 955px; */
  display: block;
  margin: auto;
  border: 1px solid #000;
  border-radius: 10px;
  background-color: rgb(150, 250, 216);
  padding: 10px;
  height: 400px;
  width: auto;
  overflow-y: auto ;
  margin-bottom: 10px;
}
.message {
  background-color: rgb(179, 182, 178);
  width: 25%;
  padding: 10px;
  border-radius: 10px;
}
.left {
  float: left;
  clear: both;
  margin: 10px;
}
.right {
  float: right;
  clear: both;
  margin: 10px;
}
.joined {
  background-color: rgb(225, 119, 77);
  width: 25%;
  padding: 10px;
  border-radius: 10px;
}
.leave{
  background-color: rgb(41, 205, 226);
  width: 25%;
  padding: 10px;
  border-radius: 10px;
}
.type {
  background-color: rgb(75, 232, 78);
  width: 25%;
  padding: 10px;
  border-radius: 10px;
}



</style>