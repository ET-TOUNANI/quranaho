<template>
  <div
    @click="goToChapter"
    class="inline-flex items-center justify-start px-4 py-2 border border-transparent rounded-md cursor-pointer shadow-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
  >
    <div class="flex-1 text-2xl items-center justify-center flex-col">
      <p class="arabic text-2xl">{{ chapter.name_arabic }}</p>
    </div>
    <div class=" flex flex-col pl-4">
      <p class="text-md text-left ">{{ chapter.translated_name.name }}</p>
      <p class="text-sm text-left text-gray-200 ">{{ chapter.name_simple }}</p>
    </div>
    <div
      class="rounded-full text-sm bg-gray-100 flex flex-wrap justify-center items-center text-gray-800 h-7 w-7"
    >
      {{ chapter.id }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    chapter: {}
  },
  methods: {
    goToChapter() {
      this.$router.push({ name: "id", params: { id: this.chapter.id } });
    }
  }
};
</script>

<style></style>
