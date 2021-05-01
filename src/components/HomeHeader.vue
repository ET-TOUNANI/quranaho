<template>
  <div class="header text-white">
    <img
      class="mx-auto h-32 my-8"
      src="https://cdn.qurancdn.com/assets/quran-logo-f5d0f128f5aa2a1949a3157d96bbd04a184e4a4ee0e05d464a3f2ae8d0bdcbdf.png"
      alt=""
    />
    <ul v-if="false">
      <li>add logo</li>
      <li>search for word</li>
      <li>search for hizb</li>
      <li>search for juz</li>
      <li>search for ayah</li>
      <li>search dropdown</li>
      <li>navbar translation</li>
      <li>migration to typescript</li>
    </ul>

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
  </div>
</template>

<script>
import SearchDropdown from "@/components/SearchDropdown.vue";
import SearchIcon from "@/components/SearchIcon.vue";
export default {
  data() {
    return {
      translatedWords: {
        search: "بحث"
      }
    };
  },
  components: {
    SearchDropdown,
    SearchIcon
  }
};
</script>

<style></style>
