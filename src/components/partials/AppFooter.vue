<template>
  <div class="text-gray-800 dark:text-white">
    <div class="text-center py-8">2022 &copy; {{ title }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      title: "القرآن الكريم",
    };
  },
});
</script>

<style></style>
