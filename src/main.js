import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueDragscroll from "vue-dragscroll";

createApp(App)
  .use(VueDragscroll)
  .use(store)
  .use(router)
  .mount('#app')
