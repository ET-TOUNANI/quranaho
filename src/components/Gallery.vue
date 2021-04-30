<template>
  <div class="gallery">
    <div class="grid grid-cols-3 gap-4">
      <div
        v-for="chapter in chapters"
        :key="chapter.id"
        class="bg-green-400 rounded-md p-8"
      >
        <h1>{{ JSON.stringify(chapter.name_arabic) }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Gallery",
  data() {
    return {
      error: {
        type: String,
        default: ""
      },
      chapters: {}
    };
  },
  methods: {
    async fetchChapters() {
      try {
        await axios
          .get("https://api.quran.com/api/v4/chapters?language=en")
          .then(response => {
            this.chapters = response.data.chapters;
            console.log(response.data.chapters[0]);
          })
          .catch(error => {
            this.error = error;
          });
      } catch (error) {
        console.log(error);
      }
    }
  },
  mounted() {
    console.log("Mounted");
    this.fetchChapters();
  }
};
</script>

<style></style>
