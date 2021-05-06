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
  },
  methods: {
    setupAppThemeMode() {
      // get the theme from local storage
      let appThemeMode = localStorage.getItem("mode");
      if (appThemeMode.length === 0) appThemeMode = "light";
      document.documentElement.setAttribute("class", appThemeMode);
      this.$store.commit("setAppThemeMode", appThemeMode);
    }
  },
  created() {
    this.setupAppThemeMode();
  }
};
</script>

<style></style>
