export default {
  state: {
    chaptersList: {},
    currentChapter: {},
    currentHizb: {}
  },
  mutations: {
    setChaptersList: (state, payload) => {
      state.chaptersList = payload;
    },
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
    getChaptersList: state => {
      return state.chaptersList;
    },
    getCurrentChapter: state => {
      return state.currentChapter;
    },
    getCurrentHizb: state => {
      return state.currentHizb;
    }
  }
};
