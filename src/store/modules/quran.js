export default {
  state: {
    currentChapter: {},
    currentHizb: {}
  },
  mutations: {
    setCurrentChapter: (state, payload) => {
      state.currentChapter = payload;
    },
    setCurrentHizb: (state, payload) => {
      state.currentHizb = payload;
    }
  },
  actions: {
    changeCurrentChapter: (context, payload) => {
      context.commit("setCurrentChapter", payload);
    },
    changeCurrentHizb: (context, payload) => {
      context.commit("setCurrentHizb", payload);
    }
  },
  getters: {
    getCurrentChapter: state => {
      return state.currentChapter;
    },
    getCurrentHizb: state => {
      return state.currentHizb;
    }
  }
};
