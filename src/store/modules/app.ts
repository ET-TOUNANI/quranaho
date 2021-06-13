export default {
  stata: {
    mode: "dark"
  },
  mutations: {
    setappColorTheme: (state, payload) => {
      state.mode = payload;
    }
  },
  getters: {
    getappColorTheme: state => {
      return state.mode;
    }
  }
};
