<template>
  <div id="app" class="bg-gray-50 dark:bg-gray-800 min-h-screen">
    <NavBar />
    <router-view />
    <AppFooter />
  </div>
</template>

<script lang="ts">
  import NavBar from '@/components/NavBar.vue'
  import AppFooter from '@/components/AppFooter.vue'
  import axios from 'axios'
  import { ref, onBeforeMount } from 'vue'
  import { defineComponent } from 'vue'

  export default defineComponent({
    setup() {
      let error = ref('')
      let isLoaded = ref(false)

      function setupAppColorTheme() {
        let appColorTheme = localStorage.getItem('mode')
        if (appColorTheme === null) appColorTheme = 'dark'
        document.documentElement.setAttribute('class', appColorTheme)
      }

      async function fetchChapters() {
        await axios
          .get('https://api.quran.com/api/v4/chapters?language=en')
          .then((response) => {
            isLoaded.value = true
          })
          .catch((error) => {
            error.value = error
          })
        return { error, isLoaded }
      }

      onBeforeMount(() => {
        setupAppColorTheme()
        fetchChapters()
      })
    },

    components: {
      NavBar,
      AppFooter
    }
  })
</script>

<style>
  .home {
    background-image: linear-gradient(to right bottom, #0d1d3a, #1a2f55 52%, #365a83);
  }
</style>
