<template>
  <div class="sm:max-w-full md:max-w-xl lg:max-w-2xl mx-auto my-8">
    <div class="mt-1 relative">
      <div>
        <div class="mt-1 relative rounded-md shadow-sm">
          <div class="absolute inset-y-0 left-0 py-3  pl-3 flex items-center ">
            <span class="text-gray-500 sm:text-sm cursor-pointer h-full ">
              <search-icon />
            </span>
          </div>
          <input
            @input="search"
            type="text"
            class="block w-full text-lg text-gray-900  bg-white border
                 border-gray-300 rounded-full shadow-sm pr-3 pl-8 py-3 
                   focus:outline-none 
                 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
            :placeholder="translatedWords.search + '...'"
          />
        </div>
      </div>

      <search-dropdown :searchResults="searchResults" v-if="searchResultsLoaded" />
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
      let searchQuery = event.target.value;
      try {
        await axios
          .get(`https://api.quran.com/api/v4/search?q=${searchQuery}&size=20&page=0&language=en`)
          .then(response => {
            this.searchResults = response.data.search.results;
            console.log(this.searchResults);
            this.searchResultsLoaded = true
          })
          .catch(error => (this.error = error));
      } catch (error) {
        this.error = error;
      }
    }
  }
};
</script>

<style></style>
