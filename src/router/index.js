import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import LoginPage from '../views/LoginPage.vue';
import RegisterPage from '../views/RegisterPage.vue';

const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginPage
  },
  { 
    path: '/register',
    name: "register",
    component: RegisterPage 
  },
  {
    path: '/home',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/',
    redirect: '/login'
  
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
