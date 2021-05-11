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
import axios from "axios";
export default {
  components: {
    HeaderNavbar,
    Footer
  },
  metaInfo: {
    title: "القرآن الكريم"
  },
  data() {
    return {
      error: "",
      isLoaded: false
    };
  },
  methods: {
    setupAppThemeMode() {
      // get the theme from local storage
      let appThemeMode = localStorage.getItem("mode");
      if (appThemeMode.length === 0) appThemeMode = "light";
      document.documentElement.setAttribute("class", appThemeMode);
      this.$store.commit("setAppThemeMode", appThemeMode);
    },
    // this is not working on reload target page
    async fetchChapters() {
      try {
        await axios
          .get("https://api.quran.com/api/v4/chapters?language=en")
          .then(response => {
            this.$store.commit("setChaptersList", response.data.chapters);
            this.isLoaded = true;
          })
          .catch(error => {
            this.error = error;
          });
      } catch (error) {
        console.log(error);
      }
    }
  },
  created() {
    this.setupAppThemeMode();
    this.fetchChapters();
  }
};
</script>

<style></style>
