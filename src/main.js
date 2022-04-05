import { createApp } from 'vue'
import {createRouter, createWebHistory} from "vue-router";
import App from './App.vue'
import './index.css'
import Home from '/src/views/Home.vue'
import Login from '/src/views/Login.vue'
import ForgotPassword from '/src/views/ForgotPassword.vue'
import Inicio from '/src/views/Inicio.vue'
import Pagos from '/src/views/Pagos.vue'
import Conceptos from '/src/views/Conceptos.vue'


//create router
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'inicio',
          component: Inicio
        },
        {
          path: 'pagos',
          component: Pagos
        },
        {
          path: 'conceptos',
          component: Conceptos
        },
      ]
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
