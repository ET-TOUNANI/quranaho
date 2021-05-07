<template>
  <div
    v-if="chaptersLoaded && recitersLoaded"
    class="bg-gray-50 dark:bg-gray-800 border-t border-b dark:border-gray-700"
  >
    <div class="container mx-auto py-4 flex">
      <!-- header dropdown item -->
      <div class="mx-2">
        <button
          @click="showRecitersDropdown = !showRecitersDropdown"
          class="w-52 py-2 bg-gray-50 dark:bg-indigo-800 dark:text-gray-100 dark:border-indigo-700 border-2 focus:outline-none focus:border focus:border-indigo-800 border-gray-200 rounded-md shadow-sm text-gray-900 rounded-sm"
        >
          {{ reciter }}
        </button>
        <ul
          v-if="showRecitersDropdown"
          class="absolute  w-52 z-10 shadow-lg bg-white dark:bg-gray-300 mt-1 max-h-96 rounded-sm py-1 text-base  overflow-auto sm:text-sm"
          tabindex="-1"
          role="listbox"
          aria-labelledby="listbox-label"
          aria-activedescendant="listbox-option-3"
        >
          <li
            v-for="reciter in reciters"
            :key="reciter.id"
            class="text-gray-900 hover:bg-gray-100  select-none py-1 relative cursor-pointer border-b px-2 "
            id="listbox-option-0"
            role="option"
            @click="changeReciter(reciter.id)"
          >
            <span class="text-md my-1 font-normal ml-3 block truncate ">
              {{ reciter.translated_name.name }}
            </span>
          </li>
        </ul>
      </div>
      <!-- header dropdown item -->
      <div class="mx-2">
        <button
          @click="showChaptersDropdown = !showChaptersDropdown"
          class="w-52 py-2 bg-gray-50  dark:bg-indigo-800 dark:text-gray-100 dark:border-indigo-700 border-2 focus:outline-none focus:border focus:border-indigo-800 border-gray-200 rounded-md shadow-sm text-gray-900 rounded-sm"
        >
          {{ chaptersList[0].name_arabic }}
        </button>
        <ul
          v-if="showChaptersDropdown"
          class="c--scrollbar absolute w-52 z-10 bg-white dark:bg-gray-300 mt-1 shadow-lg max-h-96 rounded-sm py-1 text-base  overflow-auto sm:text-sm"
          tabindex="-1"
          role="listbox"
          aria-labelledby="listbox-label"
          aria-activedescendant="listbox-option-3"
        >
          <li
            v-for="chapter in chaptersList"
            :key="chapter.id"
            class="text-gray-900 hover:bg-gray-100  select-none py-1 relative cursor-pointer border-b px-2 "
            id="listbox-option-0"
            role="option"
            @click="changeChapter(chapter.id)"
          >
            <span class="text-md my-1 font-normal ml-3 block truncate ">
              {{ chapter.name_arabic }}
            </span>
          </li>
        </ul>
      </div>

      <!-- header dropdown item -->
      <div class="mx-2">
        <button
          @click="showHizbsDropdown = !showHizbsDropdown"
          class="w-52 py-2 bg-gray-50 dark:bg-indigo-800 dark:text-gray-100 dark:border-indigo-700 border-2 focus:outline-none focus:border focus:border-indigo-800 border-gray-200 rounded-md shadow-sm text-gray-900 rounded-sm"
        >
          {{ translatedWords.hizb }}
        </button>
        <ul
          v-if="showHizbsDropdown"
          class="absolute  w-52 z-10 shadow-lg bg-white dark:bg-gray-300 mt-1 max-h-96 rounded-sm py-1 text-base  overflow-auto sm:text-sm"
          tabindex="-1"
          role="listbox"
          aria-labelledby="listbox-label"
          aria-activedescendant="listbox-option-3"
        >
          <li
            v-for="hizb in 60"
            :key="hizb"
           class="text-gray-900 hover:bg-gray-100  select-none py-1 relative cursor-pointer border-b px-2 "
            id="listbox-option-0"
            role="option"
            @click="changeReciter(reciter.id)"
          >
            <p cclass="text-md my-1 font-normal ml-3 block truncate ">
              <span>
                {{ translatedWords.hizb }}
              </span>
              <span class="mx-1">
                {{ hizb }}
              </span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      translatedWords: {
        chapters: "جميع السور",
        about: "معلومات عنا",
        title: "القرآن الكريم",
        hizb: "حزب",
        juz: "جزء",
        rub: "ربع"
      },
      reciters: {},
      error: "",
      reciter: "",
      chapers: "",
      showRecitersDropdown: false,
      showChaptersDropdown: false,
      showHizbsDropdown: false,
      chaptersList: {},
      chaptersLoaded: false,
      recitersLoaded: false
    };
  },
  methods: {
    // Fetch list of available reciters for audio playing
    async fetchReciters() {
      try {
        await axios
          .get("https://api.quran.com/api/v4/resources/recitations?language=ar")
          .then(response => {
            this.reciters = response.data.recitations;
            this.reciter = this.reciters[0].translated_name.name;
            this.recitersLoaded = true;
          })
          .catch(error => {
            this.error = error;
          });
      } catch (error) {
        this.error = error;
      }
    },

    // Change current reciter
    changeReciter(reciterId) {
      let reciterObject = this.reciters.filter(
        reciter => reciter.id === reciterId
      );
      this.reciter = reciterObject[0].translated_name.name;
      this.showRecitersDropdown = false;
    },

    // Change chapter
    changeChapter(chapterID) {
      let cId = chapterID;
    },
    // Change juz
    changeJuz(juzID) {
      let jID = juzID;
    },
    // Change rub
    changeRub(rubID) {
      let rID = rubID;
    },
    // Fetch list of all chapters names
    async fetchChapters() {
      try {
        await axios
          .get("https://api.quran.com/api/v4/chapters?language=en")
          .then(response => {
            this.chaptersList = response.data.chapters;
            this.chaptersLoaded = true;
          })
          .catch(error => {
            this.error = error;
          })
          .finally(() => {
            this.loading = false;
          });
      } catch (error) {
        console.log(error);
      }
    }
  },

  created() {
    this.fetchReciters();
    this.fetchChapters();
  }
};
</script>

<style></style>
