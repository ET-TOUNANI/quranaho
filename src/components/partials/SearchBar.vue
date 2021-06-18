<template>
  <div class="sm:max-w-full md:max-w-xl lg:max-w-2xl mx-auto my-8">
    <div class="mt-1 relative">
      <div>
        <div class="mt-1 relative rounded-md shadow-sm">
          <div
            class="absolute inset-y-0 left-0 py-4 ml-3  rounded-full cursor-pointer "
          >
            <!-- <span class="sm:text-sm cursor-pointer h-full "> -->
            <search-icon />
            <!-- </span> -->
          </div>
          <input
            @input="search"
            type="text"
            class="block w-full text-md text-gray-900 dark:bg-gray-900 border
                 border-gray-300 dark:border-gray-500 rounded-full shadow-sm pr-3 pl-10 py-3
                   focus:outline-none 
                 focus:ring-1 focus:ring-purple-500 focus:border-purple-500"
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

<script type="js">
import SearchDropdown from "@/components/partials/SearchDropdown.vue";
import SearchIcon from "@/components/icons/SearchIcon.vue";
import axios from "axios";
export default {
  data() {
    return {
      translatedWords: {
        search: "بحث"
      },
      error: "",
      searchResults: {},
      searchResultsLoaded: false
    };
  },
  components: {
    SearchDropdown,
    SearchIcon
  },
  methods: {
    // search chapter or verse
    async search(event){
      console.log(event.target.value);
      let searchQuery = event.target.value;
      let searchPage = 0;
      if(searchQuery.length > 0) {

      try {
        await axios
          .get(`https://api.quran.com/api/v4/search?q=${searchQuery}&size=20&page=${searchPage}&language=en`)
          .then(response => {
            this.searchResults = response.data.search.results;
            console.log(response);
            this.searchResultsLoaded = true
          })
          .catch(error => (this.error = error));
      } catch (error) {
        this.error = error;
      }
      } else {
        this.searchResults = [];
      }
    },


  }
};
</script>

<style></style>
