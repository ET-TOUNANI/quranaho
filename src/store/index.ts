import Vue from "vue";
import Vuex from "vuex";
import quranModules from "./modules/quran";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    quran: quranModules,
  },
});
