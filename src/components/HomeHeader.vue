<template>
  <div class="header text-white">
    <img
      class="mx-auto h-32 my-8"
      src="https://cdn.qurancdn.com/assets/quran-logo-f5d0f128f5aa2a1949a3157d96bbd04a184e4a4ee0e05d464a3f2ae8d0bdcbdf.png"
      alt=""
    />

    <search-bar />
  </div>
</template>

<script>
import SearchBar from "@/components/partials/SearchBar.vue";

export default {
 
  components: {
    SearchBar
  }
};
</script>

<style></style>

//
<ul v-if="false">
//       <li>add logo</li>
//       <li>search for word</li>
//       <li>search for hizb</li>
//       <li>search for juz</li>
//       <li>search for ayah</li>
//       <li>search dropdown</li>
//       <li>navbar translation</li>
//       <li>migration to typescript</li>
//     </ul>
