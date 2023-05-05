import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDDBPAEeaHIgkSJ3eK51hjbPExYH8B43rc",
  authDomain: "inwentarz-29f58.firebaseapp.com",
  projectId: "inwentarz-29f58",
  storageBucket: "inwentarz-29f58.appspot.com",
  messagingSenderId: "441395377661",
  appId: "1:441395377661:web:dcf58a92fdecec18d35594"
};

initializeApp(firebaseConfig);

createApp(App).use(store).use(router).mount('#app')
