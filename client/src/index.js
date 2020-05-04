import Vue from 'vue';
import Router from 'vue-router';

import App from './App.vue';
import Home from './components/Home.vue'
import Blog from './components/Blog.vue'
import Admin from './components/Admin.vue'

Vue.use(Router)

Vue.config.productionTip = false;

const router = new Router({
  routes: [
    {
      path: '/',
      name:'home',
      component: Home
    },
    {
      path: '/blog',
      name:'blog',
      component: Blog
    },
    {
      path: '/getoutofhere',
      name:'admin',
      component: Admin
    }
  ]
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
});
