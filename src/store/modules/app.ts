export default {
  stata: {
    mode: "dark"
  },
  mutations: {
    setAppThemeMode: (state, payload) => {
      state.mode = payload;
    }
  },
  getters: {
    getAppThemeMode: state => {
      return state.mode;
    }
  }
};
