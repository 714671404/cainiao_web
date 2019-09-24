import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
import './views/components';
import './assets/css/main.css';

new Vue({
  router,
  store,
  ...App
}).$mount('#app');
