import {
  createRouter,
  createWebHashHistory
} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignIn from '../views/SignInView.vue'
import Register from '../views/RegisterView.vue'

import store from '@/store'
const routes = [{
    path: '/',
    name: 'home',
    component: HomeView,
    beforeEnter: (to, from, next) => {
      if (!store.getters['auth/authenticated']) {
        return next({
          name: 'login', 
        })
      }

      next()
    }
  },
  {
    path: '/login',
    name: 'login',
    component: SignIn
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router