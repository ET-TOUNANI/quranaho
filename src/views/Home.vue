<template>
  <div class="home bg-gray-800 xs:px-6 sm:px-2">
    <div class="container mx-auto">
      <home-header />
      <gallery />
    </div>
  </div>
</template>

<script lang="ts">
import Gallery from "@/components/Gallery.vue";
import HomeHeader from "@/components/HomeHeader.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    Gallery,
    HomeHeader
  }
})
export default class Home extends Vue {}
</script>
