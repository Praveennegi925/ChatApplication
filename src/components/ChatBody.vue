<template>
  <div class="container">
    
  </div>

  <div class="send">
    <div id="message-container">
      <form >
        <input class="text" type="text" placeholder="Start messaging here" id="messageInput"  />
        <input class="send-text" type="submit" value="send" />
      </form>
    </div>
  </div>
</template>
<style >
input.text {
  margin-left: 600px;
  margin-right: auto;
  margin-top: 10px;
  height: 50px;
  width: 500px;
  background-color: rgb(217, 226, 226);
  font-size: 20px;
}
input.send-text {
  height: 50px;
  width: 100px;
  margin-left: 10px;
}

::placeholder {
  text-align: center;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 20px;
}
.container {
  max-width: 955px;
  display: block;
  margin: auto;
  border: 1px solid #000;
  border-radius: 10px;
  background-color: rgb(174, 241, 219);
  padding: 10px;
  height: 400px;
  width: auto;
  overflow-y: auto ;
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

</style>