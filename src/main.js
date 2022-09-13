import { createApp } from "vue";
import Vue from './App.vue';
import Header from './components/TheHeader.vue';
const app= createApp(Vue);
app.component('TheHeader',Header);
app.mount('#app');

