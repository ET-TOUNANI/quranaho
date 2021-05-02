<template>
  <ul
    v-if="true"
    class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-96 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
    tabindex="-1"
    role="listbox"
    aria-labelledby="listbox-label"
    aria-activedescendant="listbox-option-3"
  >
    <router-link to="/">
      <li
        v-for="(result, index) in searchResults"
        :key="index"
        class="text-gray-900  select-none relative py-1 border-b px-2 hover:bg-gray-100"
        id="listbox-option-0"
        role="option"
      >
        <div class="items-center">
          <span class="rounded-md bg-green-300 p-1 text-xs">{{
            result.verse_id
          }}</span>
          <span class="quran text-2xl my-1 font-normal ml-3 block truncate">
            {{ result.text }}
          </span>
          <!-- <p>{{ result.translations[0].text }}</p> -->
        </div>
      </li>
    </router-link>
  </ul>
</template>

<script>
export default {
  props: {
    searchResults: {
      type: [Object, Array]
    }
  }
};
</script>

<style></style>
