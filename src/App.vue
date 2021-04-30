<template>
  <div id="app" class="bg-gray-800">
    <Navbar />
    <div class="pt-2">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  components: {
    Navbar
  }
};
</script>

<style lang="scss"></style>
