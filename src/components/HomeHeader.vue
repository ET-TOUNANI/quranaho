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
                <svg
                  class="h-full m-0"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 511.999 511.999"
                  style="enable-background:new 0 0 511.999 511.999;"
                  xml:space="preserve"
                >
                  <g>
                    <g>
                      <path
                        d="M508.874,478.708L360.142,329.976c28.21-34.827,45.191-79.103,45.191-127.309c0-111.75-90.917-202.667-202.667-202.667
                          S0,90.917,0,202.667s90.917,202.667,202.667,202.667c48.206,0,92.482-16.982,127.309-45.191l148.732,148.732
                          c4.167,4.165,10.919,4.165,15.086,0l15.081-15.082C513.04,489.627,513.04,482.873,508.874,478.708z M202.667,362.667
                          c-88.229,0-160-71.771-160-160s71.771-160,160-160s160,71.771,160,160S290.896,362.667,202.667,362.667z"
                      />
                    </g>
                  </g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                </svg>
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
export default {
  data() {
    return {
      translatedWords: {
        search: "بحث"
      }
    };
  },
  components: {
    SearchDropdown
  }
};
</script>

<style></style>
