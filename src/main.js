import Vue from 'vue'
import App from './App.vue'
import VueSocketIO from "vue-socket.io";
import { router } from "./routes/routes";

Vue.use(new VueSocketIO({
  debug:true,
  connection: 'ws://localhost:8090'
}));

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
