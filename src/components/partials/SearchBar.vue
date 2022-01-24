<template>
  <div class="sm:max-w-full md:max-w-xl lg:max-w-2xl mx-auto my-8">
    <div class="mt-1 relative">
      <div>
        <div class="mt-1 relative rounded-md shadow-sm">
          <div
            class="absolute inset-y-0 left-0 grid place-content-center pt-1 ml-3 rounded-full cursor-pointer text-gray-600"
          >
            <search-icon />
          </div>
          <input
            @input="search"
            type="text"
            class="block w-full text-md text-gray-900 dark:bg-gray-900 border border-gray-300 dark:border-gray-500 rounded-full shadow-sm pr-3 pl-10 py-3 focus:outline-none focus:ring-1 focus:ring-green-400 focus:border-green-400"
            :placeholder="translatedWords.search + '...'"
          />
        </div>
      </div>

      <search-dropdown
        :searchResults="searchResults"
        v-if="searchResultsLoaded"
      />
    </div>
  </div>
</template>

<script lang="ts">
import SearchDropdown from "@/components/partials/SearchDropdown.vue";
import SearchIcon from "@/components/icons/SearchIcon.vue";
import axios from "axios";
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      translatedWords: {
        search: "بحث",
      },
      searchResults: {},
      searchResultsLoaded: false,
    };
  },
  components: {
    SearchDropdown,
    SearchIcon,
  },
  methods: {
    // search chapter or verse
    async search(event: Event) {
      let searchQuery = (event.target as HTMLInputElement).value;
      let searchPage = 0;
      if (searchQuery.length > 0) {
        await axios
          .get(
            `https://api.quran.com/api/v4/search?q=${searchQuery}&size=20&page=${searchPage}&language=en`
          )
          .then((response) => {
            this.searchResults = response.data.search.results;
            this.searchResultsLoaded = true;
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        this.searchResults = [];
      }
    },
  },
});
</script>

<style></style>
