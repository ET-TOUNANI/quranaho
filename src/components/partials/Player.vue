<template>
  <div
    class="w-full bg-gray-50 dark:bg-gray-900 border-t border-gray-500 h-10 fixed top-full transform -translate-y-full"
  >
    <div
      class="container px-2 text-gray-800 dark:text-gray-100 mx-auto h-full py-2 flex items-center justify-end"
    >
      <sound-adjuster-icon :isPlaying="isPlaying" />
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
      isPlaying: false,
      // audio: null,
      audioFullSource: ""
    };
  },
  methods: {
    // load verse audio
    async fetchChapterVerseAudio() {
      // try {
      //   await axios
      //     .get(
      //       `https://api.quran.com/api/v4/quran/recitations/1?chapter_number=2`
      //     )
      //     .then(response => {
      //       this.versesAudioFilesList = response.data.audio_files;
      //       this.isAudioFilesLoaded = true;
      //     })
      //     .catch(error => (this.error = error));
      // } catch (error) {
      //   this.error = error;
      // }
    },
    // play audio file
    playAudioFile(audioFileName) {
      // if (!this.isPlaying) {
      //   this.audio = new Audio(`${this.audioHostDomainName}/${audioFileName}`);
      //   this.audio.play();
      //   this.isPlaying = true;
      // }
    },
    playbackListener(e) {
      var audio = this.$refs.player;

      //Sync local 'playbackTime' var to audio.currentTime and update global state
      this.playbackTime = audio.currentTime;

      console.log("update: " + audio.currentTime);

      //Add listeners for audio pause and audio end events
      audio.addEventListener("ended", this.endListener);
      audio.addEventListener("pause", this.pauseListener);
    },
    async playChapter() {
      // await this.fetchChapterVerseAudio();
      // // this.audioFullSource = this.audioHostDomainName + this.versesAudioFilesList[0].url;
      // this.audioFullSource = "https://audio.qurancdn.com/Sudais/mp3/002002.mp3";

      // let audioPlayerControl = document.getElementById("audioPlayerControl");
      // audioPlayerControl.addEventListener(
      //   "ondurationchange",
      //   () => {
      //     console.log("change");
      //   },
      //   false
      // );

      // console.log(this.audioFullSource);

      // audioPlayerControl.play();

      // if (this.isAudioFilesLoaded)
      //   this.playAudioFile(this.versesAudioFilesList[0].url);
      this.$refs.player.play();
      this.isPlaying = true;
    }
  },
  mounted: function() {
    // // wait intill the entire view has been rendreded
    // this.$nextTick(() => {

    // });
    // this.audioFullSource = "https://audio.qurancdn.com/Sudais/mp3/002002.mp3";

    // wait intill the entire view has been rendered
    this.$nextTick(function() {
      var audio = this.$refs.player;

      this.audioFullSource = "https://audio.qurancdn.com/Sudais/mp3/002002.mp3";
      // wait for audio to load
      audio.addEventListener(
        "loadedmetadata",
        function() {
          // call this.initSlider();
          console.log("loadedmetadata");
        }.bind(this)
      );
    });

    this.$watch("isPlaying", function() {
      this.$refs.player.addEventListener(
        "freqtimeupdate",
        this.playBackListener
      );
    });
  }
};
</script>

<style></style>
