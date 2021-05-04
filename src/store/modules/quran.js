export default {
  state: {
    chaptersList: {}
  },
  mutations: {
    setChaptersList: (state, payload) => {
      state.chaptersList = payload;
    }
  },
  actions: {},
  getters: {
    getChaptersList: state => {
      return state.chaptersList;
    }
  }
};
