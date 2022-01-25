<template>
  <div class="header text-white pt-8">
    <img
      class="mx-auto rounded-md h-44"
      src="https://unsplash.com/photos/kZ1zThg6G40/download?force=true&w=640"
      alt=""
    />
    <transition name="slide-fade">
      <search-bar @close-modal="show = false" v-if="show" />
    </transition>

    <div class="sm:max-w-full md:max-w-xl lg:max-w-2xl mx-auto my-8">
      <div class="mt-1 relative mx-2 sm:mx-0">
        <div :class="show ? 'opacity-20' : 'opacity-100'">
          <div class="mt-1 relative rounded-md shadow-sm">
            <div
              class="absolute inset-y-0 left-0 grid place-content-center pt-1 ml-3 rounded-full cursor-pointer text-gray-600"
            >
              <search-icon />
            </div>
            <input
              @focus="showSearchModal()"
              type="text"
              class="block w-full text-md text-gray-900 dark:bg-gray-700 border border-gray-300 dark:border-gray-500 rounded-full shadow-sm pr-3 pl-10 py-3 focus:outline-none"
              :placeholder="translatedWords.search + '...'"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import SearchBar from "@/components/partials/SearchBar.vue";
import { defineComponent } from "@vue/runtime-core";
import SearchIcon from "./icons/SearchIcon.vue";

export default defineComponent({
  data: () => {
    return {
      translatedWords: {
        search: "بحث",
      },
      show: false,
    };
  },

  methods: {
    showSearchModal() {
      setTimeout(() => {
        this.show = true;
      }, 100);
    },
  },
  mounted() {
    this.show = true;
  },
  components: {
    SearchBar,
    SearchIcon,
  },
});
</script>

<style>
.slide-fade-enter-active {
  transition: all 0.2s ease;
}
.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(100vh);
  opacity: 0;
}
</style>
