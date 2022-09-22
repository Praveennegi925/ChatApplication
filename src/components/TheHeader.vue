<template>
  <userslist></userslist>
</template>
<script>
import userslist from "./usersList.vue";

export default {
  components: { userslist },
  data() {
    return {
      url: require("/home/privatedeal/Documents/chat-application/src/assets/msg.png"),
      title: "CHAT",
    };
  },
};
</script>

<style>
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
    