// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

//import 'bootstrap/dist/css/bootstrap.css'
//import 'mdbootstrap/css/mdb.css'

import Vue from 'vue';
import App from './App';

import VueRouter from 'vue-router';
Vue.use(VueRouter)

import 'vue-material/dist/vue-material.min.css'
import VueMaterial from 'vue-material'
Vue.use(VueMaterial);

import { routes } from './routes'

const router = new VueRouter({
  routes,
  mode: 'history'
});

Vue.config.productionTip = false;



new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
