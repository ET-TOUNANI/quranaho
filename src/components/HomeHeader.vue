<template>
  <div class="header text-white pt-8">
    <img
      class="mx-auto rounded-lg h-44"
      src="https://unsplash.com/photos/kZ1zThg6G40/download?force=true&w=640"
      alt=""
    />

    <search-bar />
  </div>
</template>

<script lang="ts">
import SearchBar from "@/components/partials/SearchBar.vue";

export default {
  components: {
    SearchBar,
  },
};
</script>

<style></style>
