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
        00:21:31/1:51:49
      </p>
      <div @click="playChapter">
        <play-pause-icon />
      </div>
      <div class="">
        <audio ref="player" controls id="audioPlayerControl">
          <source :src="audioFullSource" type="audio/mpeg" />
          Your browser does not support the audio tag.
        </audio>
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
      error: "",
      versesAudioFilesList: [],
      audioHostDomainName: "https://audio.qurancdn.com/",
      isAudioFilesLoaded: false,
      isAudioPlay: false,
      audio: null,
      audioFullSource: ""
    };
  },
  methods: {
    // load verse audio
    async fetchChapterVerseAudio() {
      try {
        await axios
          .get(
            `https://api.quran.com/api/v4/quran/recitations/1?chapter_number=2`
          )
          .then(response => {
            this.versesAudioFilesList = response.data.audio_files;
            this.isAudioFilesLoaded = true;
          })
          .catch(error => (this.error = error));
      } catch (error) {
        this.error = error;
      }
    },
    // play audio file
    playAudioFile(audioFileName) {
      if (!this.isAudioPlay) {
        this.audio = new Audio(`${this.audioHostDomainName}/${audioFileName}`);
        this.audio.play();
        this.isAudioPlay = true;
      }
    },

    async playChapter() {
      await this.fetchChapterVerseAudio();
      // this.audioFullSource = this.audioHostDomainName + this.versesAudioFilesList[0].url;
      this.audioFullSource = "https://audio.qurancdn.com/Sudais/mp3/002002.mp3";

      let audioPlayerControl = document.getElementById("audioPlayerControl");
      audioPlayerControl.addEventListener(
        "ondurationchange",
        () => {
          console.log("change");
        },
        false
      );

      console.log(this.audioFullSource);

      audioPlayerControl.play();

      if (this.isAudioFilesLoaded)
        this.playAudioFile(this.versesAudioFilesList[0].url);
    } 
  },
 
};
</script>

<style></style>
