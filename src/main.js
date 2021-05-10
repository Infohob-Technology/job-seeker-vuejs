// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import './assets/css/main.css';

Vue.use(Antd);
Vue.config.productionTip = false;

import 'bootstrap/dist/css/bootstrap.css';
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>',
});
