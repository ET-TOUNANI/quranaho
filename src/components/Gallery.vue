<template>
  <div class="gallery ">
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-2 md:gap-2 "
    >
      <div
        v-for="chapter in chapters"
        :key="chapter.id"
        class="bg-green-400 rounded-md p-8 border-2 border-green-500"
      >
        <chapter-card :chapter="chapter" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ChapterCard from "./ChapterCard.vue";
export default {
  name: "Gallery",
  components: {
    ChapterCard
  },
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
    this.fetchChapters();
  }
};
</script>

<style></style>
