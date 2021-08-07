import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Auth from '@/views/Auth.vue'
import MyPage from '@/views/MyPage.vue'

import store from '@/store/index.js'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true }
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
