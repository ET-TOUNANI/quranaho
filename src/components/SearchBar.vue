<template>
    <div class="sm:max-w-full md:max-w-xl lg:max-w-2xl mx-auto my-8">
      <div class="mt-1 relative">
        <div>
          <div class="mt-1 relative rounded-md shadow-sm">
            <div
              class="absolute inset-y-0 left-0 py-3  pl-3 flex items-center "
            >
              <span class="text-gray-500 sm:text-sm cursor-pointer h-full ">
                <search-icon />
              </span>
            </div>
            <input
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

<script>
import SearchDropdown from "@/components/SearchDropdown.vue";
import SearchIcon from "@/components/SearchIcon.vue";
export default {
   
  components: {
    SearchDropdown,
    SearchIcon
  }
}
</script>

<style>

</style>