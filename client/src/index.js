import Vue from 'vue';
import Router from 'vue-router';

import App from './App.vue';
import Home from './components/home.vue'
import Blog from './components/blog.vue'

Vue.use(Router)

Vue.config.productionTip = false;

const router = new Router({
  mode: 'history',
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
    }
  ]
});

new Vue({
  el: '#app',
  render: h => h(App),
  router,
});
