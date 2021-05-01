<template>
  <div class="header text-white">
    <img
      class="mx-auto h-32 my-8"
      src="https://cdn.qurancdn.com/assets/quran-logo-f5d0f128f5aa2a1949a3157d96bbd04a184e4a4ee0e05d464a3f2ae8d0bdcbdf.png"
      alt=""
    />
    <ul>
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
            <div class="absolute inset-y-0 left-0  pl-2 flex items-center ">
              <span class="text-gray-500 sm:text-sm cursor-pointer h-full py-3">
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
                 border-gray-300 rounded-md shadow-sm pr-3 pl-8 py-2 
                 sm:text-sm border-gray-300 rounded-md focus:outline-none 
                 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              :placeholder="translatedWords.search + '...'"
            />
          </div>
        </div>

        <ul
          v-if="false"
          class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
          tabindex="-1"
          role="listbox"
          aria-labelledby="listbox-label"
          aria-activedescendant="listbox-option-3"
        >
          <li
            v-for="i in 23"
            :key="i"
            class="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9"
            id="listbox-option-0"
            role="option"
          >
            <div class="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
                class="flex-shrink-0 h-6 w-6 rounded-full"
              />
              <span class="font-normal ml-3 block truncate">
                Wade Cooper
              </span>
            </div>

            <span
              class="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4"
            >
              <svg
                class="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      translatedWords: {
        search: "بحث"
      }
    };
  }
};
</script>

<style></style>
