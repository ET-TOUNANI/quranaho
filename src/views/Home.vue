<template>
  <div class="home">
    <div class="container mx-auto"><Gallery /></div>
  </div>
</template>

<script lang="ts">
import Gallery from "@/components/Gallery.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    Gallery
  }
})
export default class Home extends Vue {}
</script>
