import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Auth from '@/views/Auth.vue'
import MyPage from '@/views/MyPage.vue'
import Register from '@/views/Register.vue'
import Contribution from '@/views/Contribution.vue'

// import 'bootstrap/dist/css/bootstrap.css' // add
// import 'bootstrap-vue/dist/bootstrap-vue.css' // add

// Vue.config.productionTip = false

import store from '@/store/index.js'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    // meta: { requiresAuth: true }
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth
  },
  {
    path: '/mypage',
    name: 'MyPage',
    component: MyPage,
    //meta: { requiresAuth: true }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    // meta: { requiresAuth: true }
  },
  {
    path: '/contribution',
    name: 'Contribution',
    component: Contribution,
    // meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth) && !store.state.user.isLoggedIn) {
    next({ path: '/auth', query: { redirect: to.fullPath } });
  } else {
    next();
  }
});

export default router
