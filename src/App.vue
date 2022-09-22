<template>
  <div class="container-fluid" style="display: flex;">
    <the-header></the-header>
    <chat-body></chat-body>
  </div>
 
</template>

<script>
import ChatBody from "./components/ChatBody.vue";

export default {
  components: {
    ChatBody,
  },
};
</script>

