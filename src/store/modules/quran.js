export default {
  state: {
    chaptersList: {},
    currentChapter: {},
    currentHizb: {}
  },
  mutations: {
    setChaptersList: (state: any, payload: any): any => {
      state.chaptersList = payload;
    },
    setCurrentChapter: (state: any, payload: any): any => {
      state.currentChapter = payload;
    },
    setCurrentHizb: (state: any, payload: any): any => {
      state.currentHizb = payload;
    }
  },
  actions: {
    changeCurrentChapter: (context: any, payload: any): void => {
      context.commit("setCurrentChapter", payload);
    },
    changeCurrentHizb: (context: any, payload: any): void => {
      context.commit("setCurrentHizb", payload);
    }
  },
  getters: {
    getChaptersList: (state: any): void => {
      return state.chaptersList;
    },
    getCurrentChapter: (state: any): any => {
      return state.currentChapter;
    },
    getCurrentHizb: (state: any): any => {
      return state.currentHizb;
    }
  }
};
