import Vue from "vue";
import Vuex from "vuex";

import getters from "./getters";
import mutations from "./mutations";
import * as actions from "./actions";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tickers: [],
    coin: {},
    ticker: {}
  },
  getters,
  mutations,
  actions
});
