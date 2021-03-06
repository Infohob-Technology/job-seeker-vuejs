// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import './assets/css/main.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import '../node_modules/jquery/dist/jquery.js';
import '../node_modules/datatables.net-dt/css/jquery.dataTables.css';
import '../node_modules/datatables.net/js/jquery.dataTables.min.js';
import '../node_modules/datatables.net-dt/js/dataTables.dataTables.js';

import store from "./store/store";
import { setupInterceptors } from './utils/httpInterceptors';
import axios from 'axios'
Vue.use(Antd);
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.config.productionTip = false

import 'bootstrap/dist/css/bootstrap.css'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  store: store,
  axios: axios,
  beforeCreate() { this.$store.commit('initialiseStore'); },
  created() {
    setupInterceptors(store);
  },
  template: '<App/>'
})
