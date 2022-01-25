<template>
  <div
    v-if="chaptersLoaded && recitersLoaded"
    class="bg-gray-100 dark:bg-gray-800 border-t border-b dark:border-gray-700"
  >
    <div class="container mx-auto lg:max-w-xl py-4 flex">
      <!-- Chapters dropdown  -->
      <div class="mx-2 flex-1">
        <button
          @click="showChaptersDropdown = !showChaptersDropdown"
          class="py-2 w-full border-2 dark:border-white dark:border-opacity-40 text-gray-700 dark:text-gray-400 hover:border-green-400 dark:hover:border-green-400 hover:bg-gray-100 dark:hover:bg-gray-900 delay-75 rounded"
        >
          {{ chapter.name_arabic }}
        </button>
        <ul
          id="list"
          v-if="showChaptersDropdown"
          class="text-right absolute w-60 z-10 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 mt-1 shadow-xl max-h-96 border-2 rounded py-1 overflow-auto"
          tabindex="-1"
          role="listbox"
          aria-labelledby="listbox-label"
          aria-activedescendant="listbox-option-3"
        >
          <li
            v-for="chapter in chaptersList"
            :key="chapter.id"
            class="hover:border-green-400 dark:hover:border-green-400 hover:bg-gray-100 dark:hover:bg-gray-900 py-1 relative cursor-pointer border-b-2 px-2"
            id="listbox-option-0"
            role="option"
            @click="changeChapter(chapter)"
          >
            <span class="text-md my-1 font-normal ml-3 block truncate">{{
              chapter.name_arabic
            }}</span>
          </li>
        </ul>
      </div>

      <!-- Hizbs dropdown -->
      <div class="mx-2 flex-1">
        <button
          @click="showHizbsDropdown = !showHizbsDropdown"
          class="py-2 w-full border-2 dark:border-white dark:border-opacity-40 text-gray-700 dark:text-gray-300 hover:border-green-400 dark:hover:border-green-400 hover:bg-gray-100 dark:hover:bg-gray-900 delay-75 rounded"
        >
          <p class="text-md font-normal ml-3 block truncate">
            <span>{{ translatedWords.hizb }}</span>
            <span class="mx-1">{{ hizbNumber }}</span>
          </p>
        </button>
        <ul
          id="list"
          v-if="showHizbsDropdown"
          class="text-right absolute w-60 z-10 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 mt-1 shadow-xl max-h-96 border-2 rounded py-1 overflow-auto"
          tabindex="-1"
          role="listbox"
          aria-labelledby="listbox-label"
          aria-activedescendant="listbox-option-3"
        >
          <li
            v-for="hizb in 60"
            :key="hizb"
            class="hover:border-green-400 dark:hover:border-green-400 hover:bg-gray-100 dark:hover:bg-gray-900 py-1 relative cursor-pointer border-b-2 px-2"
            id="listbox-option-0"
            role="option"
            @click="changeHizb(hizb)"
          >
            <p class="text-md my-1 font-normal ml-3 block truncate">
              <span>{{ translatedWords.hizb }}</span>
              <span class="mx-1">{{ hizb }}</span>
            </p>
          </li>
        </ul>
      </div>

      <!-- Reciters dropdown  -->
      <div class="mx-2 flex-1">
        <button
          @click="showRecitersDropdown = !showRecitersDropdown"
          class="py-2 w-full border-2 dark:border-white dark:border-opacity-40 text-gray-700 dark:text-gray-300 hover:border-green-400 dark:hover:border-green-400 hover:bg-gray-100 dark:hover:bg-gray-900 delay-75 rounded"
        >
          {{ reciter }}
        </button>
        <ul
          id="list"
          v-if="showRecitersDropdown"
          class="text-right absolute w-60 z-10 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 mt-1 shadow-xl max-h-96 border-2 rounded py-1 overflow-auto"
          tabindex="-1"
          role="listbox"
          aria-labelledby="listbox-label"
          aria-activedescendant="listbox-option-3"
        >
          <li
            v-for="reciter in reciters"
            :key="reciter.id"
            class="hover:border-green-400 dark:hover:border-green-400 hover:bg-gray-100 dark:hover:bg-gray-900 py-1 relative cursor-pointer border-b-2 px-2"
            id="listbox-option-0"
            role="option"
            @click="changeReciter(reciter.id)"
          >
            <span class="text-md my-1 font-normal ml-3 block truncate">{{
              reciter.translated_name.name
            }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { defineComponent } from "vue";

interface Reciter {
  id: number;
  name: string;
  translated_name: {
    name: string;
  };
}

interface Chapter {
  id: number;
  name_arabic: string;
  name_english: string;
  number: number;
}

export default defineComponent({
  data() {
    return {
      translatedWords: {
        chapters: "جميع السور",
        about: "معلومات عنا",
        title: "القرآن الكريم",
        hizb: "حزب",
        juz: "جزء",
        rub: "ربع",
      },
      reciters: [] as Reciter[],
      reciter: "" as string,
      chapter: {} as Chapter,
      showRecitersDropdown: false as boolean,
      showChaptersDropdown: false as boolean,
      showHizbsDropdown: false as boolean,
      chaptersList: [] as Chapter[],
      chaptersLoaded: false as boolean,
      recitersLoaded: false as boolean,
      hizbNumber: 1 as number,
    };
  },
  methods: {
    // Fetch list of available reciters for audio playing
    async fetchReciters() {
      try {
        await axios
          .get("https://api.quran.com/api/v4/resources/recitations?language=ar")
          .then((response) => {
            this.reciters = response.data.recitations;
            this.reciter = this.reciters[0].translated_name.name;
            this.recitersLoaded = true;
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.log(error);
      }
    },

    // Change current reciter
    changeReciter(reciterNumber: number) {
      let reciterObject = this.reciters.filter(
        (reciter) => reciter.id === reciterNumber
      );
      this.reciter = reciterObject[0].translated_name.name;
      this.showRecitersDropdown = false;
    },

    // Change chapter
    changeChapter(selectedChapter: Chapter) {
      // make sure that we are not fetching the same chapter
      if (this.chapter.id !== selectedChapter.id) {
        this.chapter = selectedChapter;
        this.showChaptersDropdown = false;
        this.$emit("changeChapter", selectedChapter.id);
      }
    },

    // Change hizb
    changeHizb(hizbNumber: number) {
      // make sure that we are not fetching the same chapter
      this.showHizbsDropdown = false;
      this.hizbNumber = hizbNumber;
      this.$emit("changeHizb", hizbNumber);
    },

    // Fetch list of all chapters names
    async fetchChapters() {
      try {
        await axios
          .get("https://api.quran.com/api/v4/chapters?language=en")
          .then((response) => {
            this.chaptersList = response.data.chapters;
            this.chaptersLoaded = true;
            this.chapter = this.chaptersList[0];
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.log(error);
      }
    },
  },

  created() {
    this.fetchReciters();
    this.fetchChapters();
  },
});
</script>

<style>
/* ===== Scrollbar CSS ===== */
/* Firefox */
#list {
  scrollbar-width: auto;
  scrollbar-color: #e6e6e6 #ffffff;
  direction: ltr;
}

/* Chrome, Edge, and Safari */
#list::-webkit-scrollbar {
  width: 6px;
}

#list::-webkit-scrollbar-track {
  background: #34d399;
  border-radius: 10px;
}

#list::-webkit-scrollbar-thumb {
  background-color: #e6e6e6;
  border-radius: 10px;
  border: 3px solid #ffffff;
}
</style>
