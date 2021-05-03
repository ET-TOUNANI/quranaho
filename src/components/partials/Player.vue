<template>
  <div
    class="w-full bg-gray-50 dark:bg-gray-900 border-t border-gray-500 h-10 fixed top-full transform -translate-y-full"
  >
    <div
      class="container text-gray-800 dark:text-gray-100 mx-auto h-full py-2 flex items-center justify-end"
    >
      <sound-adjuster-icon />
      <div class="border-2 border-gray-500 dark:border-gray-300 flex-1 rounded-md mx-2 "></div>
      <p class="ml-2 text-sm">{{sound.time.total}} / {{sound.time.played}}</p>
      <play-pause-icon />
    </div>
  </div>
</template>

<script>
import PlayPauseIcon from "@/components/icons/PlayPauseIcon.vue";
import SoundAdjusterIcon from "@/components/icons/SoundAdjusterIcon.vue";
export default {
  components: {
    PlayPauseIcon,
    SoundAdjusterIcon
  },
  data() {
    return {
      sound: {
        url: "",
        time: {
          played: "0:00",
          total: "2:00:00"
        }
      }
    };
  }
};
</script>

<style></style>
