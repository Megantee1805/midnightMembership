import { createApp } from 'vue'
import App from './App.vue'
import WelcomePageVue from './components/WelcomePage.vue';
import Books from './components/Books.vue';
import HelloWorld from './components/HelloWorld.vue'
import Register from './components/Register.vue'
import './assets/main.css'
import {createRouter, createWebHashHistory } from 'vue-router'
import Login from './components/Login.vue'
import Podcast from './components/PodcastPage.vue'
import About from './components/About.vue'


const routes = [
  { path: '/', component: WelcomePageVue },
  { path: '/books', name: "Books", component: Books },
  { path: '/login', name: "Login", component: Login}, 
  { path: '/register', name: "Register", component: Register },
  { path: '/podcast', name: "Podcast", component: Podcast },
  { path: '/about', name: "About", component: About },
]


const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
  
})

// 5. Create and mount the root instance.
// Make sure to _use_ the router instance to make the
// whole app router-aware.

const app = createApp(App)


app.config.errorHandler = (err: any) => {
    /* handle error */
    console.log(err)
  }

  app.use(router)

app.mount('#app') 