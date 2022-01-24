import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import "./assets/styles/index.css";
// import { createMetaManager } from "vue-meta";

createApp(App)
  //   .use(createMetaManager())
  .use(router)
  .mount("#app");
