<template>
  <div
    class="chapter__container quran dark:text-white text-black text-4xl 
    leading-normal text-justify pt-4 min-h-screen lg:max-w-xl mx-auto pb-16"
  >
    <span v-for="verse in verses" :key="verse.id">
      <span v-if="Number(verse.verse_key.split(':')[1]) == 1">
        <!-- chapter starting devider -->
        <p
          class="px-5 mt-16 mb-5 w-full bg-gray-700 rounded border-b-4 border-gray-600"
        >
          Surat Name {{ verse.verse_key }}
        </p>

        <span class="quran" v-if="chapterNumber != 9 && chapterNumber != 1">
          <span v-for="(word, index) in startingVerse.split(' ')" :key="index"
            >{{ word + " " }}
          </span>
        </span>
      </span>
      <!-- verse indopack text -->
      <span v-for="(word, index) in verse.text_indopak.split(' ')" :key="index"
        >{{ word + " " }}
      </span>
      <!-- verse number icon -->
      <span class="relative">
        <span
          class="pt-4 text-gray-800 absolute w-full h-full text-lg text-center font-bold"
          >{{ verse.verse_key.split(":")[1] }}</span
        >
        <span class="chapter__verseNumberIcon">
          <verse-icon />
        </span>
      </span>
    </span>
  </div>
</template>

<script>
import VerseIcon from "@/components/icons/VerseIcon.vue";
import axios from "axios";
export default {
  components: {
    VerseIcon
  },
  props: {
    chapterNumber: {
      type: [Number, String]
    },
    startingVerse: {
      type: [String, Object]
    },
    verses: {
      type: [Array, Object]
    }
  },
  data() {
    return {
      versesInfo: {},
      error: ""
    };
  },
  methods: {
    // fetch chapter infos
    async fetchVersesInfo() {
      await axios
        .get(
          `'https://api.quran.com/api/v4/verses/by_chapter/${this.chapterNumber}?language=ar&words=false'`
        )
        .then(response => {
          this.versesInfo = response.data;
        })
        .catch(error => {
          this.error = error;
        });
    }
  },
  mounted() {
    console.log("🍎 ");
    console.log(this.$store.getters.getChaptersList);
  }
};
</script>

<style>
.chapter__verseNumberIcon,
.chapter__verseNumberIcon svg {
  height: 40px;
  display: inline-block;
}
</style>
