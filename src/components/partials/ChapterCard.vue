<template>
  <div
    @click="goToChapter"
    class="inline-flex items-center justify-start px-6 py-4 border border-transparent rounded-lg cursor-pointer p-4 w-full max-w-md text-purple-500 bg-white dark:bg-gray-900 dark:hover:bg-gray-700 shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
  >
    <div class="flex-1 text-2xl items-center justify-center flex-col">
      <p class="arabic text-2xl">{{ chapter.name_arabic }}</p>
    </div>
    <div class="flex flex-col pl-4">
      <p class="text-md text-left">{{ chapter.translated_name.name }}</p>
      <p class="text-sm text-left text-gray-500">{{ chapter.name_complex }}</p>
    </div>

    <div
      class="rounded-lg text-sm font-semibold bg-green-100 dark:bg-green-800 dark:text-gray-400 flex flex-wrap justify-center items-center text-gray-500 h-8 w-8"
    >
      {{ chapter.id }}
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    chapter: {},
  },
  methods: {
    goToChapter() {
      this.$router.push({ name: "chapter", params: { id: this.chapter.id } });
    },
  },
  mounted() {
    // console.log(this.chapter);
  },
};
</script>

<style>
.card {
  background: rgba(255, 255, 255, 0.25) !important;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37) !important;
  backdrop-filter: blur(4px) !important;
  -webkit-backdrop-filter: blur(4px) !important;
  border-radius: 10px !important;
  border: 1px solid rgba(255, 255, 255, 0.18) !important;
}
</style>
