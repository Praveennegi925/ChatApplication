<template>
  <h1>{{title}}</h1>
  <div id="container">
    <img :src="url" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      url: require("/home/privatedeal/Documents/chat-application/src/assets/msg.png"),
      title:'CHAT'
    };
  },
};
</script>
<style scoped>
h1 {
  color: rgb(4, 11, 11);
  text-align: center;
}
img {
  height: 100px;
  width: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>