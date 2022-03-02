<template>
  <nav class="border-b-2 border-gray-200 dark:border-gray-700">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-4">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <button
            @click="isHidden = !isHidden"
            type="button"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>

            <svg
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>

            <svg
              class="hidden h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex-shrink-0 flex items-center">
            <div class="flex items-center">
              <img class="block h-8 w-auto pl-4 sm:pl-0" src="../assets/logo.png" alt="Workflow" />
              <router-link to="/">
                <img src="@/assets/quran-karem.png" alt="quran-karem" class="h-10" />
              </router-link>
            </div>
          </div>
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <nav-bar-item :to="'/'">
                <nav-bar-item-label> {{ translatedWords.chapters }} </nav-bar-item-label>
              </nav-bar-item>
              <nav-bar-item :to="'/about'">
                <nav-bar-item-label> {{ translatedWords.about }} </nav-bar-item-label>
              </nav-bar-item>
            </div>
          </div>
        </div>
        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:pr-0"
        >
          <mode-switcher />
          <a class="hidden sm:block" href="https://ko-fi.com/K3K690OEW" target="_blank"
            ><img
              height="40"
              style="border: 0px; height: 32px; padding: 0px 10px"
              src="https://cdn.ko-fi.com/cdn/kofi1.png?v=3"
              alt="Buy Me a Coffee at ko-fi.com"
          /></a>
        </div>
      </div>
    </div>

    <div class="sm:hidden bg-gray-200 dark:bg-gray-700" :class="isHidden ? 'hidden' : ''">
      <div class="px-2 pt-2 pb-3 flex flex-col">
        <nav-bar-item :to="'/'">
          <nav-bar-item-label> {{ translatedWords.chapters }} </nav-bar-item-label>
        </nav-bar-item>
        <nav-bar-item :to="'/about'">
          <nav-bar-item-label> {{ translatedWords.about }} </nav-bar-item-label>
        </nav-bar-item>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
  import ModeSwitcher from '@/components/ModeSwitcher.vue'
  import { defineComponent } from 'vue'
  import NavBarItem from './NavBarItem.vue'
  import NavBarItemLabel from './NavBarItemLabel.vue'
  export default defineComponent({
    data() {
      return {
        isHidden: true,
        translatedWords: {
          chapters: 'جميع السور',
          about: 'معلومات عنا',
          title: 'القرآن الكريم'
        }
      }
    },
    components: {
      ModeSwitcher,
      NavBarItem,
      NavBarItemLabel
    }
  })
</script>
