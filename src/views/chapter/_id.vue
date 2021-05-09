<template>
  <div class="chapter text-white dark:bg-gray-800">
    <chapter-header
      v-on:changeChapter="changeChapter"
      v-on:changeHizb="changeHizb"
    />
    <div class="container mx-auto">
      <div
        v-if="!isLoaded"
        class="text-gray-800 dark:text-gray-100 absolute w-40 inset-1/2"
      >
        {{ translatedWords.loading + "..." }}
      </div>
      <chapter-text
        v-else
        :chapterNumber="chapterNumber"
        :startingVerse="startingVerse"
        :verses="verses"
      />
    </div>
    <audio-player />
  </div>
</template>

<script lang="js">

import ChapterText from "@/components/partials/ChapterText.vue";
import ChapterHeader from "@/components/partials/ChapterHeader.vue";
import AudioPlayer from "@/components/partials/AudioPlayer.vue";

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
        type: [String]
      },
      chapterNumber: {
        type: Number
      },
      isLoaded: {
        type: Boolean,
        default: false,
      },
      hizbNumber: {
        type: [String, Number],

      }
    };
  },
  components: {
    ChapterText,
    ChapterHeader,
    AudioPlayer
  },
  created() {
    this.chapterNumber = this.$route.params.id;
    this.fetchStartingVerse();
    this.fetchChapter(this.chapterNumber);
  },

  methods: {
    // load the whole chapter
    async fetchChapter() {
      try {
        await axios
          .get(
            `https://api.quran.com/api/v4/quran/verses/indopak?chapter_number=${this.chapterNumber}`
          )
          .then(response => {
            this.verses = response.data.verses;
            this.isLoaded = true;
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
    },


    // fetch hizb
    async fetchHizb(hizbNumber) {
      try {
        await axios
          .get(
            `https://api.quran.com/api/v4/quran/verses/indopak?hizb_number=${hizbNumber}`
          )
          .then(response => {
            this.verses = response.data.verses;
         this.isLoaded = true;
          })
          .catch(error => {
            this.error = error;
          });
      } catch (error) {
        this.error = error;
      }
    },


    // fetch new chapter
    changeChapter(chapterNumber) {
      this.$router.push({name: "id", params: {"id": chapterNumber}});
      this.isLoaded = false;
      this.chapterNumber = chapterNumber;
      this.fetchStartingVerse();
      this.fetchChapter();
    },


    // fetch new hizb
    changeHizb(hizbNumber) {
      this.isLoaded = false;
      this.fetchStartingVerse();
      this.fetchHizb(hizbNumber)
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
