import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index.js';

import './vue/components';

import './assets/stylesheets/application.scss';

// setup fake backend
import { configureFakeBackend } from './helpers/fake-backend';
configureFakeBackend();

Vue.config.productionTip = true

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
