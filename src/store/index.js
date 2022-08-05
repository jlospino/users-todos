import Vue from 'vue';
import Vuex from 'vuex';

import { account } from './account.module.js';
import { alert } from './alert.module.js';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    account,
    alert,
  }
});