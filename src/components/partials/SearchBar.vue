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
            class="block w-full text-gray-900  bg-white border
                 border-gray-300 rounded-full shadow-sm pr-3 pl-8 py-3 
                 sm:text-sm border-gray-300 rounded-md focus:outline-none 
                 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            :placeholder="translatedWords.search + '...'"
          />
        </div>
      </div>
      <search-dropdown v-if="false" />
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
      error: ""
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

      try {
        await axios
          .get("")
          .then(response => {
            console.log(response);
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
