<template>
  <div id="app" class="bg-gray-50 dark:bg-gray-800 min-h-screen">
    <header-navbar />
    <router-view />
    <Footer v-if="false" />
  </div>
</template>

<script lang="ts">
import HeaderNavbar from "@/components/HeaderNavbar.vue";
import Footer from "@/components/partials/Footer.vue";
import axios from "axios";
import { ref, onBeforeMount } from "vue";

export default {
  setup() {
    let error = ref("");
    let isLoaded = ref(false);

    function setupAppColorTheme() {
      console.log("setupAppColorTheme");
      // get the theme from local storage
      let appColorTheme = localStorage.getItem("mode");
      if (appColorTheme === null) appColorTheme = "light";
      document.documentElement.setAttribute("class", appColorTheme);
      // this.$store.commit("setappColorTheme", appColorTheme);
    }

    async function fetchChapters() {
      await axios
        .get("https://api.quran.com/api/v4/chapters?language=en")
        .then((response) => {
          // this.$store.commit("setChaptersList", response.data.chapters);
          isLoaded.value = true;
        })
        .catch((error) => {
          error.value = error;
        });

      // call the function to setup the app color theme
      setupAppColorTheme();

      return { error, isLoaded };
    }

    onBeforeMount(() => {
      setupAppColorTheme();
      fetchChapters();
    });
  },

  components: {
    HeaderNavbar,
    Footer,
  },
};

// export default {
//   components: {
//     HeaderNavbar,
//     Footer,
//   },
//   // useMeta({
//   //   title: "القرآن الكريم",
//   //   meta: [
//   //     { charset: "utf-8" },
//   //     { name: "viewport", content: "width=device-width, initial-scale=1" },
//   //   ],
//   // }),
//   data() {
//     return {
//       error: String,
//       isLoaded: Boolean,
//     };
//   },
//   methods: {
//     setupAppColorTheme() {
//       // get the theme from local storage
//       let appColorTheme = localStorage.getItem("mode");
//       if (appColorTheme === null) appColorTheme = "light";
//       document.documentElement.setAttribute("class", appColorTheme);
//       // this.$store.commit("setappColorTheme", appColorTheme);
//     },
//     // this is not working on reload target page
//     async fetchChapters() {
//       await axios
//         .get("https://api.quran.com/api/v4/chapters?language=en")
//         .then((response) => {
//           // this.$store.commit("setChaptersList", response.data.chapters);
//           this.isLoaded = true;
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     },
//   },
//   created() {
//     this.setupAppColorTheme();
//     this.fetchChapters();
//   },
// };
</script>
