import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./assets/styles/index.css";
import VueMeta from "vue-meta";

Vue.use(VueMeta);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

require("./audio/freqtimeupdate.js");
