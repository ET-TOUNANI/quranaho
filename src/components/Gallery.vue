<template>
  <div class="gallery">
    <div class="grid grid-cols-3 gap-4">
      <div v-for="i in 114" :key="i" class="bg-green-400 rounded-md p-8">
        <h1>{{ i }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
