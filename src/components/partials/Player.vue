<template>
  <div
    class="w-full bg-gray-50 dark:bg-gray-900 border-t border-gray-500 h-10 fixed top-full transform -translate-y-full"
  >
    <div
      class="container px-2 text-gray-800 dark:text-gray-100 mx-auto h-full py-2 flex items-center justify-end"
    >
      <sound-adjuster-icon :isAudioPlay="isAudioPlay" />
      <div
        class="border-2 border-gray-500 dark:border-gray-300 flex-1 rounded-md mx-2 "
      ></div>
      <p class="ml-2 text-sm">
        {{ sound.time.total }} / {{ sound.time.played }}
      </p>
      <div @click="playChapter">
        <play-pause-icon />
      </div>
    </div>
  </div>
</template>

<script>
import PlayPauseIcon from "@/components/icons/PlayPauseIcon.vue";
import SoundAdjusterIcon from "@/components/icons/SoundAdjusterIcon.vue";
import axios from "axios";

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
          played: "00:19:00",
          total: "2:00:00"
        }
      },
      error: "",
      versesAudioFilesList: [],
      audioHostDomainName: "https://audio.qurancdn.com",
      isAudioFilesLoaded: false,
      isAudioPlay: false,
      audio: null
    };
  },
  methods: {
    async fetchChapterVerseAudio() {
      try {
        await axios
          .get(
            `https://api.quran.com/api/v4/quran/recitations/1?chapter_number=2`
          )
          .then(response => {
            this.versesAudioFilesList = response.data.audio_files;
            this.isAudioFilesLoaded = true;
            // console.log(this.versesAudioFilesList);
          })
          .catch(error => (this.error = error));
      } catch (error) {
        this.error = error;
      }
    },
    playAudioFile(recitationAudioFileName) {
      // console.log("YOu are in play adio file");

      if (!this.isAudioPlay) {
        this.audio = new Audio(
          `${this.audioHostDomainName}/${recitationAudioFileName}`
        );
        this.audio.play();
        this.isAudioPlay = true;
      }
      console.log(this.audio.currentTime);
      this.audio.addEventListener(
        "durationchange",
        function() {
          console.log("play....");
        },
        false
      );
      // this.audio.ondurationchange = (event) => {
      //   console.log("asdfkasdfjasdfasdfasdf")
      // }
    },
    async playChapter() {
      await this.fetchChapterVerseAudio();
      // console.log("You are in play chapter after loading files");
      if (this.isAudioFilesLoaded)
        this.playAudioFile(this.versesAudioFilesList[1].url);
    }
  }
};
</script>

<style></style>
