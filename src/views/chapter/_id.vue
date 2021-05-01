<template>
  <div class="chapter text-white bg-white dark:bg-gray-800">
    <div class="container mx-auto">
      <div v-if="isLoading" class="absolute w-40 inset-1/2 ">
        {{ translatedWords.loading + "..." }}
      </div>
      <chapter-text
        v-else
        :chapterId="chapterId"
        :startingVerse="startingVerse"
        :verses="verses"
      />
    </div>
  </div>
</template>

<script lang="js">
import ChapterText from "@/components/partials/ChapterText.vue";
import axios from "axios";
export default {
  data() {
    return {
       translatedWords: {
        loading: "جار التحميل"
      },
      error: {
        type: String,
        default: ""
      },
      verses: {},
      startingVerse: {
        type: [String, Object]
      },
      chapterId: {
        type: Number
      },
      isLoading: {
        type: Boolean,
        default: true
      }
    };
  },
  components: {
    ChapterText
  },
  mounted() {
    this.chapterId = this.$route.params.id;
    this.fetchStartingVerse();
    this.fetchChapter();
  },
  methods: {
    // load the whole chapter
    async fetchChapter() {
      try {
        await axios
          .get(
            `https://api.quran.com/api/v4/quran/verses/indopak?chapter_number=${this.chapterId}`
          )
          .then(response => {
            this.verses = response.data.verses;
            this.isLoading = false;
          })
          .catch(error => {
            this.error = error;
          });
      } catch (error) {
        this.error = error;
      }
    },
    // load the first verse for the rest of chapters
    async fetchStartingVerse() {
      let id = 1;
      try {
        await axios
          .get(
            `https://api.quran.com/api/v4/quran/verses/indopak?chapter_number=${id}`
          )
          .then(response => {
            this.startingVerse = response.data.verses[0].text_indopak;
          })
          .catch(error => {
            this.error = error;
          });
      } catch (error) {
        this.error = error;
      }
    }
  }
};
</script>

<style>
.chapter__container {
  line-height: 4rem;
}
.chapter__verseNumberIcon,
.chapter__verseNumberIcon svg {
  height: 40px;
  display: inline-block;
}
</style>
