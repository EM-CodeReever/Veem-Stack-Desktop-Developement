import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';
import { currentUserStore } from '../stores/User';
import HomeView from '../views/HomeView.vue';
import AdminView from '../views/AdminView.vue';
import EditUserView from '../views/EditUserView.vue'
import MovieView from '../views/MovieView.vue'
import BookView from '../views/BookView.vue'
import SeriesView from '../views/SeriesView.vue'
import ManageContentView from '../views/ManageContentView.vue'
import YourReviews from '../views/YourReviews.vue'
import SettingsView from '../views/SettingsView.vue'
import ContentView from '../views/ContentView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),// for development
//   history: createWebHashHistory(import.meta.env.BASE_URL), // for build
  routes: [
    {
        path: '/',
        name: 'home',
        meta: {auth: true},
        component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      meta: {auth: false},
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      meta: {auth: false},
      component: RegisterView
    },
    {
        path: '/admin',
        name: 'admin',
        meta: {auth: true},
        component: AdminView
    },
    {
      path: '/edit-user/:id?',
      name: 'edit-user',
      meta: {auth: true},
      component: EditUserView
    },
    {
      path: '/movies',
      name: 'movies',
      meta: {auth: true},
      component: MovieView
    },
    {
      path: '/series',
      name: 'series',
      meta: {auth: true},
      component: SeriesView
    },
    {
      path: '/books',
      name: 'books',
      meta: {auth: true},
      component: BookView
    },
    {
      path: '/manage',
      name: 'manage',
      meta: {auth: true},
      component: ManageContentView
    },
    {
      path: '/your-reviews',
      name: 'your-reviews',
      meta: {auth: true},
      component: YourReviews
    },
    {
      path: '/content/:id?',
      name: 'content',
      meta: {auth: true},
      component: ContentView
    },
    {
      path: '/settings',
      name: 'settings',
      meta: {auth: true},
      component: SettingsView
    },
]   
})

router.beforeEach((to, from, next) => {

  const currentUser = currentUserStore();

  if (to.matched.some(record => record.meta.auth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!currentUser.loggedIn) {
      next({ name: 'login',  query: { redirect: `${to.path}` }})
    } else {
      next() // go to wherever I'm going
    }
  } else {
    next() // does not require auth, make sure to always call next()!
  }
})

export default router