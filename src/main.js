import { createApp } from 'vue'
import {createRouter, createWebHistory} from "vue-router";
import App from './App.vue'
import './index.css'
import Home from '/src/views/Home.vue'
import Login from '/src/views/Login.vue'
import ForgotPassword from '/src/views/ForgotPassword.vue'


//create router
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/forgot-password',
      name: 'forgot-password',
      component: ForgotPassword
    }
  ]
})

createApp(App)
    .use(router)
    .mount('#app')
