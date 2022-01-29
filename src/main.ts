import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import "./assets/styles/index.css";
import { createPinia } from "pinia";
createApp(App).use(router).use(createPinia()).mount("#app");
