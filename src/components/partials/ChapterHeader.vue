<template>
  <div
    v-if="chaptersLoaded && recitersLoaded"
    class="bg-gray-50 dark:bg-gray-800 border-t border-b dark:border-gray-700 "
  >
    <div class="container mx-auto lg:max-w-xl py-4 flex">
      <!-- Chapters dropdown  -->
      <div class="mx-2 flex-1">
        <button
          @click="showChaptersDropdown = !showChaptersDropdown"
          class="py-2  w-full bg-gray-50  dark:bg-indigo-800 dark:text-gray-100 dark:border-indigo-700 border-2 focus:outline-none focus:border focus:border-indigo-800 border-gray-200 rounded-md shadow-sm text-gray-900 rounded-sm"
        >
          {{ chapter.name_arabic }}
        </button>
        <ul
          id="scroll-style-1"
          v-if="showChaptersDropdown"
          class="c--scrollbar absolute max-w-xs w-48 z-10 bg-white dark:bg-gray-300 mt-1 shadow-lg max-h-96 rounded-sm py-1 text-base overflow-auto sm:text-sm"
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
            @click="changeChapter(chapter)"
          >
            <span class="text-md my-1 font-normal ml-3 block truncate ">
              {{ chapter.name_arabic }}
            </span>
          </li>
        </ul>
      </div>

      <!-- Hizbs dropdown -->
      <div class="mx-2 flex-1">
        <button
          @click="showHizbsDropdown = !showHizbsDropdown"
          class="py-2 w-full  bg-gray-50 dark:bg-indigo-800 dark:text-gray-100 dark:border-indigo-700 border-2 focus:outline-none focus:border focus:border-indigo-800 border-gray-200 rounded-md shadow-sm text-gray-900 rounded-sm"
        >
          <p class="text-md  font-normal ml-3 block truncate ">
            <span>
              {{ translatedWords.hizb }}
            </span>
            <span class="mx-1">
              {{ hizbNumber }}
            </span>
          </p>
        </button>
        <ul
          id="scroll-style-1"
          v-if="showHizbsDropdown"
          class="c--scrollbar absolute max-w-xs w-48 z-10 bg-white dark:bg-gray-300 mt-1 shadow-lg max-h-96 rounded-sm py-1 text-base overflow-auto sm:text-sm"
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
            @click="changeHizb(hizb)"
          >
            <p class="text-md my-1 font-normal ml-3 block truncate ">
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

      <!-- Reciters dropdown  -->
      <div class="mx-2 flex-1">
        <button
          @click="showRecitersDropdown = !showRecitersDropdown"
          class="py-2 w-full  bg-gray-50 dark:bg-indigo-800 dark:text-gray-100 dark:border-indigo-700 border-2 focus:outline-none focus:border focus:border-indigo-800 border-gray-200 rounded-md shadow-sm text-gray-900 rounded-sm"
        >
          {{ reciter }}
        </button>
        <ul
          id="scroll-style-1"
          v-if="showRecitersDropdown"
          class="c--scrollbar absolute max-w-xs w-48 z-10 bg-white dark:bg-gray-300 mt-1 shadow-lg max-h-96 rounded-sm py-1 text-base overflow-auto sm:text-sm"
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
      chapter: "",
      showRecitersDropdown: false,
      showChaptersDropdown: false,
      showHizbsDropdown: false,
      chaptersList: {},
      chaptersLoaded: false,
      recitersLoaded: false,
      hizbNumber: "?"
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
    changeReciter(reciterNumber) {
      let reciterObject = this.reciters.filter(
        reciter => reciter.id === reciterNumber
      );
      this.reciter = reciterObject[0].translated_name.name;
      this.showRecitersDropdown = false;
    },

    // Change chapter
    changeChapter(selectedChapter) {
      // make sure that we are not fetching the same chapter
      if (this.chapter.id !== selectedChapter.id) {
        this.chapter = selectedChapter;
        this.showChaptersDropdown = false;
        this.$emit("changeChapter", selectedChapter.id);
      }
    },

    // Change hizb
    changeHizb(hizbNumber) {
      // make sure that we are not fetching the same chapter
      this.showHizbsDropdown = false;
      this.hizbNumber = hizbNumber;
      this.$emit("changeHizb", hizbNumber);
    },
    // Change juz
    changeJuz(juzNumber) {
      let jID = juzNumber;
    },
    // Change rub
    changeRub(rubNumber) {
      let rID = rubNumber;
    },
    // Fetch list of all chapters names
    async fetchChapters() {
      try {
        await axios
          .get("https://api.quran.com/api/v4/chapters?language=en")
          .then(response => {
            this.chaptersList = response.data.chapters;
            this.chaptersLoaded = true;
            this.chapter = this.chaptersList[0];
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
    this.chapter = this.$store.getters.getCurrentChapter;
  }
};
</script>

<style></style>
