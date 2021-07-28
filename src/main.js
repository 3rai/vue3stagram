import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase' 
import VueDragscroll from "vue-dragscroll";


//ログイン機能
var config = {
  apiKey: "AIzaSyD21QLle2lf24S3dPIP6L5WB9ji1STfqRs",
  authDomain: "sweet-miyazaki.firebaseapp.com",
  projectId: "sweet-miyazaki",
  storageBucket: "sweet-miyazaki.appspot.com",
  messagingSenderId: "249397524799",
  appId: "1:249397524799:web:52586884699ee689657b8a"
};
firebase.initializeApp(config)


createApp(App)
  .use(VueDragscroll)
  .use(store)
  .use(router)
  .mount('#app')
