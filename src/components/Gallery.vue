<template>
  <div class="gallery pb-2">
    <div
      v-if="!loading"
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-3 md:gap-3 mx-2 sm:mx-0"
    >
      <chapter-card
        v-for="chapter in chapters"
        :key="chapter.id"
        :chapter="chapter"
      />
    </div>
    <div class="w-full h-full grid place-items-center" v-else>
      {{ translatedWords._loading }}...
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import ChapterCard from "./partials/ChapterCard.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Gallery",
  components: {
    ChapterCard,
  },
  data() {
    return {
      translatedWords: {
        _loading: "جار التحميل",
      },
      loading: true,
      error: "",
      chapters: {},
    };
  },
  methods: {
    async fetchChapters() {
      await axios
        .get("https://api.quran.com/api/v4/chapters?language=en")
        .then((response) => {
          this.chapters = response.data.chapters;
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
  created() {
    this.fetchChapters();
  },
});
</script>

<style></style>
