import Vue from "vue";
import Vuex from "vuex";
// import quranModule from "./modules/quran";
import appModule from "./modules/app";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    // quran: quranModule,
    // app: appModule,
  },
});
