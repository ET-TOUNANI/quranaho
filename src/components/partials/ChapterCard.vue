<template>
  <div class="card">
    <router-link :to="{ name: 'Chapter', params: { id: chapter?.id } }">
      <div
        class="w-full inline-flex items-center justify-start px-3 sm:px-6 py-2 sm:py-4"
      >
        <div
          class="flex-1 text-lg sm:text-2xl items-center justify-center flex-col"
        >
          <p class="arabic text-gray-700 dark:text-gray-300">
            {{ chapter?.name_arabic }}
          </p>
        </div>
        <div class="flex flex-col pl-4">
          <p
            class="text-sm sm:text-md text-left font-medium text-gray-700 dark:text-gray-300"
          >
            {{ chapter?.translated_name.name }}
          </p>
          <p
            class="text-sm text-left text-gray-600 font-normal dark:text-gray-400"
          >
            {{ chapter?.name_complex }}
          </p>
        </div>

        <div
          class="rounded-lg text-sm font-semibold bg-green-100 dark:bg-green-700 dark:text-gray-300 flex flex-wrap justify-center items-center text-gray-500 h-8 w-8"
        >
          {{ chapter?.id }}
        </div>
      </div>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface Chapter {
  id: number;
  name_arabic: string;
  name_complex: string;
  translated_name: {
    name: string;
  };
}

export default defineComponent({
  props: {
    chapter: {
      type: Object as () => Chapter,
    },
  },
  methods: {
    goToChapter(): void {
      this.$router.push({ name: "Chapter", params: { id: this.chapter?.id } });
    },
  },
});
</script>

<style>
.card {
  background: rgba(255, 255, 255, 0.25) !important;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37) !important;
  backdrop-filter: blur(4px) !important;
  -webkit-backdrop-filter: blur(4px) !important;
  border-radius: 8px !important;
  border: 1px solid rgba(255, 255, 255, 0.18) !important;
}
</style>
