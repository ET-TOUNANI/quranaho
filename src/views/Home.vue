<template>
  <div class="xs:px-6 sm:px-2">
    <div class="container mx-auto">
      <home-header />
      <gallery />
    </div>
  </div>
</template>

<script lang="ts">
import Gallery from "@/components/Gallery.vue";
import HomeHeader from "@/components/HomeHeader.vue";

export default {
  components: {
    Gallery,
    HomeHeader,
  },
};
</script>