import { createApp } from "vue";
import Vue from "./App.vue";
import Header from "./components/TheHeader.vue";
import client from "./client.js";
const app = createApp(Vue);
app.component("TheHeader", Header);
app.use(client);
app.mount("#app");
