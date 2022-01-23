<template>
  <div
    class="chapter__container quran dark:text-white text-black text-4xl leading-normal text-justify pt-4 min-h-screen lg:max-w-xl mx-auto pb-16"
  >
    <span v-for="verse in verses" :key="verse.id">
      <span v-if="getVerseNumber(verse) == 1">
        <!-- chapter starting devider -->
        <p
          class="px-5 mb-5 w-full bg-purple-100 rounded border-b-4 border-purple-200 dark:bg-purple-800 dark:border-purple-700"
        >
          {{ translatedWords.chapter + " " + chapterName }}
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

<script lang="ts">
import VerseIcon from "@/components/icons/VerseIcon.vue";
import axios from "axios";
import { defineComponent } from "vue";

interface Verse {
  id: number;
  verse_key: string;
  text_indopak: string;
}

interface Chapter {
  id: number;
  chapter_key: string;
  name_arabic: string;
}

export default defineComponent({
  components: {
    VerseIcon,
  },
  props: {
    chapterNumber: {
      default: 0,
      type: Number,
    },
    startingVerse: {
      default: "",
      type: String,
    },
    verses: {
      default: () => [],
      type: Array as () => Verse[],
    },
  },
  data() {
    return {
      isLoaded: false as boolean,
      chapterInfo: {},
      currentChapterNumber: 0,
      chaptersInfoList: [] as Chapter[],
      translatedWords: {
        chapter: "سورة",
      },
      chapterName: "" as string,
    };
  },
  methods: {
    // Fetch chapter info
    async fetchChaptersInfo() {
      await axios
        .get(`https://api.quran.com/api/v4/chapters`)
        .then((response) => {
          this.chaptersInfoList = response.data.chapters;
          this.isLoaded = true;
          this.chapterName =
            this.chaptersInfoList[this.chapterNumber - 1].name_arabic;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    // Find verse number based on verse key
    getVerseNumber(verse: Verse) {
      return Number(verse.verse_key.split(":")[1]);
    },
  },

  mounted() {
    this.fetchChaptersInfo();
  },
});
</script>

<style>
.chapter__verseNumberIcon,
.chapter__verseNumberIcon svg {
  height: 40px;
  display: inline-block;
}
</style>
