import { acceptHMRUpdate, defineStore } from 'pinia'
import axios from 'axios'

export const useChapterStore = defineStore({
  id: 'chapter',

  state: () => ({
    id: 0,
    isLoading: false,
    reciter: 0,
    currentPlayingChapter: 0,
    chapters: []
  }),
  getters: {},

  actions: {
    async fetchAllChapters() {
      this.isLoading = true
      await axios
        .get('https://api.quran.com/api/v4/chapters?language=en')
        .then((response) => {
          this.chapters = response.data.chapters
        })
        .catch((error) => {
          console.log(error)
        })
        .finally(() => {
          this.isLoading = false
        })
    }
    // fetchChapter(id) {},
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useChapterStore, import.meta.hot))
}
