<template>
  <div class="fixed left-0 top-0 w-full h-screen z-40">
    <div class="sm:max-w-full md:max-w-xl lg:max-w-2xl mx-auto my-8 z-50">
      <div class="mt-1 relative mx-2 sm:mx-0">
        <div class="my-1 relative rounded-md shadow-sm z-50">
          <div
            class="absolute inset-y-0 left-0 grid place-content-center pt-1 ml-3 rounded-full cursor-pointer text-gray-600"
          >
            <search-icon />
          </div>
          <input
            @input="search"
            type="text"
            class="block w-full text-md text-gray-900 dark:bg-gray-700 border border-gray-300 dark:border-gray-500 rounded-full shadow-sm pr-3 pl-10 py-3 focus:outline-none focus:ring-1 focus:ring-green-400 dark:text-gray-100 focus:border-green-400"
            :placeholder="translatedWords.search + '...'"
          />
        </div>

        <search-dropdown
          :searchResults="searchResults"
          v-if="searchResultsLoaded"
        >
          <template #load-button>
            <button
              @click="loadMore()"
              class="w-full py-3 hover:text-green-400"
            >
              {{ `${loadMoreMessage} (${totalResults})` }}
            </button>
          </template></search-dropdown
        >
      </div>
    </div>
    <div
      @click.self="closeSearchModal()"
      class="fixed left-0 top-0 h-screen w-full backdrop-filter backdrop-blur-sm overflow-hidden z-40 backst"
    ></div>
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
      loadMoreMessage: "تحميل المزيد",
      searchResults: [],
      searchResultsLoaded: false,
      currentPage: 0,
      searchQuery: "",
      totalResults: 0,
      totalPages: 0,
    };
  },

  components: {
    SearchDropdown,
    SearchIcon,
  },

  mounted() {
    this.searchQuery = "god";
    this.loadResults();
  },

  methods: {
    search(event: Event) {
      // disable body scrolling when search is open
      document.body.style.overflow = "hidden";
      this.searchQuery = (event.target as HTMLInputElement).value;
      this.loadResults();
    },

    async loadResults() {
      if (this.searchQuery.length > 0) {
        await axios
          .get(
            `https://api.quran.com/api/v4/search?q=${this.searchQuery}&size=20&page=${this.currentPage}&language=en`
          )
          .then((response) => {
            this.searchResults = this.searchResults.concat(
              response.data.search.results
            );
            this.searchResultsLoaded = true;
            this.totalResults = response.data.search.total_results;
            this.totalPages = response.data.search.total_pages;
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        this.searchResults = [];
      }
    },

    loadMore(): void {
      this.currentPage++;
      this.loadResults();
    },

    // emit search results to parent component
    closeSearchModal(): void {
      this.$emit("close-modal");
    },
  },
});
</script>

<style></style>
