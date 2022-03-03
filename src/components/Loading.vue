<script lang="ts" setup>
  let message = 'جار التحميل...'
</script>

<template>
  <div
    class="fixed top-0 left-0 bg-gray-50 dark:bg-gray-800 h-screen w-full z-50 grid place-content-center"
  >
    <div>
      <img class="h-11 w-11 mx-auto" src="../assets/logo.png" alt="Workflow" />
      <div class="arab pt-2 text-gray-500">{{ message }}</div>
    </div>
  </div>
</template>
