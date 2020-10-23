import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueResource from "vue-resource";
import { API_BASE_URL } from "./constants";

import "@/styles/layout.scss";

Vue.use(VueResource);

Vue.config.productionTip = false;
Vue.http.options.root = API_BASE_URL;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
