import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueResource from 'vue-resource';

import '@/styles/layout.scss';

Vue.use(VueResource);

Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
