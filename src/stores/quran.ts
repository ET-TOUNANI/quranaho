import { acceptHMRUpdate, defineStore } from 'pinia'
import axios from 'axios'

export const useQuranStore = defineStore({
  id: 'chapter',

  state: () => ({
    id: 0,
    isLoading: false,
    reciter: 0,
    currentPlayingChapter: 0,
    chapters: [],
    verses: [],
    startingVerse: '',
    chapterNumber: 0,
    hizbNumber: 0
  }),
  getters: {},

  actions: {
    async fetchAllChapters() {
      this.isLoading = true
      await axios.get('https://api.quran.com/api/v4/chapters?language=en').then((response) => {
        this.chapters = response.data.chapters
      })
      this.isLoading = false
    },
    async fetchChapter(id: number) {
      // this.isLoading = true
      this.fetchStartingVerse()
      await axios
        .get(`https://api.quran.com/api/v4/quran/verses/indopak?chapter_number=${id}`)
        .then((response) => {
          this.verses = response.data.verses
          setTimeout(() => {
            this.isLoading = false
          }, 1000)
        })
    },

    async fetchHizb(hizbNumber: number) {
      // this.isLoading = true
      this.fetchStartingVerse()
      await axios
        .get(`https://api.quran.com/api/v4/quran/verses/indopak?hizb_number=${hizbNumber}`)
        .then((response) => {
          this.verses = response.data.verses
        })
      setTimeout(() => {
        this.isLoading = false
      }, 1000)
    },
    async fetchStartingVerse() {
      this.isLoading = true
      const id = 1
      await axios
        .get(`https://api.quran.com/api/v4/quran/verses/indopak?chapter_number=${id}`)
        .then((response) => {
          this.startingVerse = response.data.verses[0].text_indopak
        })
      // this.isLoading = false
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useQuranStore, import.meta.hot))
}
