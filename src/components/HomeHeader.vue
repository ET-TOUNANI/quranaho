<template>
  <div class="header text-white">
    <img
      class="mx-auto rounded-lg h-44 my-8"
      src="https://unsplash.com/photos/kZ1zThg6G40/download?force=true&w=640"
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
