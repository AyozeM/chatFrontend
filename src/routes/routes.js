import Vue from 'vue';
import VueRouter from 'vue-router';
import loginView from '../views/login.vue';
import chatView from '../views/chat.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/chat',  component:chatView},
  { path: '/login', component: loginView},
];

const router =  new VueRouter({routes});

export {router};
