<template>
  <div class="gallery ">
    <div
      v-if="!loading"
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-2 md:gap-2 "
    >
      <chapter-card
        v-for="chapter in chapters"
        :key="chapter.id"
        :chapter="chapter"
      />
    </div>
    <div v-else>loading...</div>
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
      loading: {
        type: Boolean,
        default: true
      },
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
            // console.log(response.data.chapters[0]);
          })
          .catch(error => {
            this.error = error;
          })
          .finally(() => {
            this.loading = false;
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
