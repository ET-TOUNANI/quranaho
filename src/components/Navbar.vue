<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <nav class="shadow dark:bg-gray-800">
    <div class="max-w-7xl  mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->

          <button
            type="button"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <!--
            Icon when menu is closed.

            Heroicon name: outline/menu

            Menu open: "hidden", Menu closed: "block"
          -->
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
            <!--
            Icon when menu is open.

            Heroicon name: outline/x

            Menu open: "block", Menu closed: "hidden"
          -->
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
        <div
          class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="flex-shrink-0 flex items-center">
            <div class="flex items-center">
              <!-- <img
                class="hidden lg:block h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                alt="Workflow"
              /> -->
              <img
                class="block h-8 w-auto"
                src="../assets/images/quran-logo.png"
                alt="Workflow"
              />
              <router-link to="/">
                <h1 class="text-white text-gray-600 px-2 dark:text-gray-200 text-2xl font-black">
                  {{ translatedWords.title }}
                </h1>
              </router-link>
            </div>
          </div>
          <div class="hidden  sm:block sm:ml-6">
            <div class="flex space-x-4">
              <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-indigo-600 hover:text-white" -->

              <!-- Active: "bg-gray-100", Not Active: "" -->
              <router-link
                class="text-gray-600 px-2 dark:text-gray-200 hover:bg-indigo-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                to="/"
                >{{ translatedWords.chapters }}</router-link
              >

              <router-link
                to="/about"
                class="text-gray-600 px-2 dark:text-gray-200 hover:bg-indigo-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >{{ translatedWords.about }}</router-link
              >
            </div>
          </div>
        </div>
        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <button
            @click="swtichThemeMode"
            class="dark:bg-gray-800 p-1 rounded-full text-gray-400 hover:text-gray-800 dark:hover:text-white focus:outline-none focus:ring-0  focus:ring-trasparent"
          >
            <svg
              v-if="isDarkModeOn"
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              ></path>
            </svg>
            <svg
              v-else
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              ></path>
            </svg>
          </button>

          <!-- Profile dropdown -->
          <div class="ml-3 relative">
            <div>
              <button
                type="button"
                class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                id="user-menu-button"
                aria-expanded="false"
                aria-haspopup="true"
              ></button>
            </div>

            <div
              class="hidden origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="user-menu-button"
              tabindex="-1"
            >
              <!-- Active: "bg-gray-100", Not Active: "" -->
              <router-link
                class="text-gray-600 px-2 dark:text-gray-200 hover:bg-indigo-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                to="/"
                >{{ translatedWords.chapters }}</router-link
              >

              <router-link
                to="/about"
                class="text-gray-600 px-2 dark:text-gray-200 hover:bg-indigo-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >{{ translatedWords.about }}</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div class="sm:hidden" :class="isHidden ? 'hidden' : ''" id="mobile-menu">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-indigo-600 hover:text-white" -->

        <!-- Active: "bg-gray-100", Not Active: "" -->
        <router-link
          class="text-gray-300 hover:bg-indigo-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          to="/"
          >{{ translatedWords.chapters }}</router-link
        >

        <router-link
          to="/about"
          class="text-gray-300 hover:bg-indigo-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >{{ translatedWords.about }}</router-link
        >
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isHidden: {
        type: Boolean,
        default: false
      },
      isDarkModeOn: true,
      translatedWords: {
        chapters: "جميع السور",
        about: "معلومات عنا",
        title: "القرآن الكريم"
      }
    };
  },
  methods: {
    toggle() {
      this.isHidden = !this.isHidden;
    },
    swtichThemeMode() {
      if (this.isDarkModeOn)
        document.documentElement.setAttribute("class", "dark");
      else document.documentElement.setAttribute("class", "light");
      this.isDarkModeOn = !this.isDarkModeOn;
    }
  }
};
</script>

<style>

</style>
