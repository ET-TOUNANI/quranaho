<template>
  <div
    class="chapter__container quran dark:text-white text-black text-4xl 
    leading-normal text-justify pt-4 min-h-screen lg:max-w-xl mx-auto pb-16"
  >
    <span v-for="verse in verses" :key="verse.id">
      <span v-if="getVerseNumber(verse) == 1">
        <!-- chapter starting devider -->
        <p
          class="px-5 mt-16 mb-5 w-full bg-indigo-100 rounded border-b-4 border-indigo-200 dark:bg-indigo-800 dark:border-indigo-700"
        >
          {{
            translatedWords.chapter +
              " " +
              getChapterInfo(Number(verse.verse_key.split(":")[0]))
          }}
        </p>

        <span v-if="chapterNumber != 9 && chapterNumber != 1">
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
          >{{ getVerseNumber(verse) }}</span
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
      type: [Number || String],
      default: 1
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
      error: "",
      isLoaded: false,
      chapterInfo: {},
      currentChapterNumber: 0,
      chaptersInfoList: [],
      translatedWords: {
        chapter: "سورة"
      }
    };
  },
  methods: {
    // Fetch chapter info
    async fetchChaptersInfo() {
      try {
        await axios
          .get(`https://api.quran.com/api/v4/chapters`)
          .then(response => {
            this.chaptersInfoList = response.data.chapters;
            this.isLoaded = true;
          })
          .catch(error => {
            this.error = error;
          });
      } catch (error) {
        console.log(error);
      }
    },

    // Find verse number based on verse key
    getVerseNumber(verse) {
      return Number(verse.verse_key.split(":")[1]);
    },

    // get chapter info
    getChapterInfo(chapterNumber) {
      let chapterName = this.chaptersInfoList[chapterNumber]?.name_arabic;
      return chapterName;
    }
  },

  mounted() {
    this.fetchChaptersInfo();
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
