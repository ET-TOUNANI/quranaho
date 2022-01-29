import { defineStore } from "pinia";

export const useChapterStore = defineStore({
  id: "chapter",
  state: () => ({
    id: 0,
    reciter: 0,
    currentPlayingChapter: 0,
  }),
  getters: {},

  actions: {},
});
