<template>
  <div id="app" class="bg-gray-100 dark:bg-gray-800 min-h-screen">
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
    title: "القرآن الكريم",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" }
    ]
  },
  data() {
    return {
      error: "",
      isLoaded: false
    };
  },
  methods: {
    setupappColorTheme() {
      // get the theme from local storage
      let appColorTheme = localStorage.getItem("mode");
      if (appColorTheme === null) appColorTheme = "light";
      document.documentElement.setAttribute("class", appColorTheme);
      // this.$store.commit("setappColorTheme", appColorTheme);
    },
    // this is not working on reload target page
    async fetchChapters() {
      try {
        await axios
          .get("https://api.quran.com/api/v4/chapters?language=en")
          .then(response => {
            // this.$store.commit("setChaptersList", response.data.chapters);
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
    this.setupappColorTheme();
    this.fetchChapters();
  }
};
</script>

<style></style>
