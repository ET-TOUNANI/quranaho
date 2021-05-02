<template>
  <div id="app" class="bg-gray-50 dark:bg-gray-800 min-h-screen">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  components: {
    Navbar
  },
  metaInfo: {
    title: "القرآن الكريم"
  }
};
</script>

<style></style>
