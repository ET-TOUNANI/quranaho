<template>
  <div
    class="bg-gray-50 dark:bg-gray-800 border-t border-b dark:border-gray-700"
  >
    <div class="container mx-auto py-4 flex">
      <button
        class="px-6 py-2 bg-gray-50 border-2 focus:outline-none focus:border focus:border-indigo-800 border-gray-200 rounded-md shadow-sm text-gray-900 rounded-sm"
      >
        Surat
      </button>
      <div class="mx-2">
        <button
          @click="showDropdown = !showDropdown"
          class="w-52 py-2 bg-gray-50 border-2 focus:outline-none focus:border focus:border-indigo-800 border-gray-200 rounded-md shadow-sm text-gray-900 rounded-sm"
        >
          {{ reciter }}
        </button>
        <ul
          v-if="showDropdown"
          class="absolute  w-52 z-10 shadow-lg max-h-96 rounded-md py-1 text-base  overflow-auto sm:text-sm"
          tabindex="-1"
          role="listbox"
          aria-labelledby="listbox-label"
          aria-activedescendant="listbox-option-3"
        >
          <li
            v-for="reciter in reciters"
            :key="reciter.id"
            class="text-gray-900 bg-white select-none relative py-1 border-b px-2 hover:bg-gray-100"
            id="listbox-option-0"
            role="option"
            @click="changeReciter(reciter.id)"
          >
            <span class="quran text-2xl my-1 font-normal ml-3 block truncate ">
              {{ reciter.translated_name.name }}
            </span>
          </li>
        </ul>
      </div>
       <div class="mx-2">
        <button
          @click="showDropdown = !showDropdown"
          class="w-52 py-2 bg-gray-50 border-2 focus:outline-none focus:border focus:border-indigo-800 border-gray-200 rounded-md shadow-sm text-gray-900 rounded-sm"
        >
          {{ translatedWords.chapters }}
        </button>
        <ul
          v-if="showDropdown"
          class="absolute  w-52 z-10 shadow-lg max-h-96 rounded-md py-1 text-base  overflow-auto sm:text-sm"
          tabindex="-1"
          role="listbox"
          aria-labelledby="listbox-label"
          aria-activedescendant="listbox-option-3"
        >
          <li
            v-for="reciter in reciters"
            :key="reciter.id"
            class="text-gray-900 bg-white select-none relative py-1 border-b px-2 hover:bg-gray-100"
            id="listbox-option-0"
            role="option"
            @click="changeReciter(reciter.id)"
          >
            <span class="quran text-2xl my-1 font-normal ml-3 block truncate ">
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
        title: "القرآن الكريم"
      },
      reciters: {},
      error: "",
      reciter: "",
      showDropdown: false
    };
  },
  methods: {
    async fetchReciters() {
      try {
        await axios
          .get("https://api.quran.com/api/v4/resources/recitations?language=ar")
          .then(response => {
            this.reciters = response.data.recitations;
            this.reciter = this.reciters[0].translated_name.name;
            console.log(response.data.recitations);
          })
          .catch(error => {
            this.error = error;
          });
      } catch (error) {
        this.error = error;
      }
    },
    changeReciter(reciterId) {
      let reciterObject = this.reciters.filter(
        reciter => reciter.id === reciterId
      );
      this.reciter = reciterObject[0].translated_name.name;
      this.showDropdown = false;
    }
  },
  mounted() {
    this.fetchReciters();
  }
};
</script>

<style></style>
