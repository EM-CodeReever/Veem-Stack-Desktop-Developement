import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AdminView from '../views/AdminView.vue'



const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),// for development
  history: createWebHashHistory(import.meta.env.BASE_URL), // for build
  routes: [
    {
        path: '/',
        name: 'home',
        meta: {auth: false},
        component: HomeView
    },
    {
        path: '/admin',
        name: 'admin',
        meta: {auth: false},
        component: AdminView
    },
]   
})

export default router