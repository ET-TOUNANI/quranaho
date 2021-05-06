export default {
  stata: {
    mode: "dark"
  },
  mutatiosn: {
    setAppThemeMode: (state, payload) => {
      state.mode = payload;
    }
  },
  getters: {
    getMode: state => {
      return state.mode;
    }
  }
};
