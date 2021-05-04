<template>
  <div id="app" class="bg-gray-50 dark:bg-gray-800 min-h-screen">
    <header-navbar />
    <router-view />
    <Footer v-if="false" />
  </div>
</template>

<script>
import HeaderNavbar from "@/components/HeaderNavbar.vue";
import Footer from "@/components/partials/Footer.vue";
export default {
  components: {
    HeaderNavbar,
    Footer
  },
  metaInfo: {
    title: "القرآن الكريم"
  }
};
</script>

<style></style>
