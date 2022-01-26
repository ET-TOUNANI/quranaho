<template>
  <div
    class="w-full bg-gray-100 dark:bg-gray-700 border-t border-gray-500 h-10 fixed top-full transform -translate-y-full"
  >
    <div
      class="container px-2 text-gray-800 dark:text-gray-100 mx-auto h-full py-2 flex items-center justify-end"
    >
      <div @click="isMute = !isMute">
        <sound-adjuster-icon :isMute="isMute" />
      </div>

      <div
        class="border-2 border-gray-500 dark:border-gray-300 flex-1 rounded-md mx-2"
      ></div>
      <p class="ml-2 text-sm">
        {{ audioTotalDuration + "/" + audioProgressDuration }}
      </p>
      <div @click="play()">
        <play-pause-icon :playPauseState="playPauseState" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import PlayPauseIcon from "@/components/icons/PlayPauseIcon.vue";
import SoundAdjusterIcon from "@/components/icons/SoundAdjusterIcon.vue";
import axios from "axios";
import { defineComponent } from "vue";
import { Howl, Howler } from "howler";

export default defineComponent({
  components: {
    PlayPauseIcon,
    SoundAdjusterIcon,
  },
  data() {
    return {
      versesAudioFilesList: [],
      audioHostDomainName: "https://audio.qurancdn.com/",
      audioTotalDuration: "0:00:00",
      audioProgressDuration: "0:00:00",
      isMute: false,
      playPauseState: false,
      currentAudioIndex: 0,
    };
  },

  mounted() {
    this.fetchChapterVerseAudio();
  },

  methods: {
    // load verse audio
    async fetchChapterVerseAudio() {
      await axios
        .get(
          `https://api.quran.com/api/v4/quran/recitations/1?chapter_number=1`
        )
        .then((response) => {
          this.versesAudioFilesList = response.data.audio_files;
          console.log(this.versesAudioFilesList);
        })
        .catch((error) => console.log(error));
    },

    play() {
      let a = `${this.audioHostDomainName}${
        this.versesAudioFilesList[this.currentAudioIndex]["url"]
      }`;
      var sound = new Howl({
        src: [a],
        autoplay: false,
        loop: false,
        onend: () => {
          this.currentAudioIndex++;
          if (this.currentAudioIndex < this.versesAudioFilesList.length) {
            this.play();
          }
        },
      });
      sound.play();
    },
  },
});
</script>

<style></style>
