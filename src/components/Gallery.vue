<template>
  <div class="gallery  pb-2">
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
import ChapterCard from "./partials/ChapterCard.vue";

import { mapGetters } from "vuex";

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
            this.$store.commit("setChaptersList", this.chapters);
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
  created() {
    this.fetchChapters();
  }
};
</script>

<style></style>
