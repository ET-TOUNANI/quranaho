<template>
  <div id="app" class="bg-gray-800">
    <Navbar />
    <div class="app__container ">
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

<style>
.app__container {
  height: calc(100% - var(--navbar-height));
}

</style>
