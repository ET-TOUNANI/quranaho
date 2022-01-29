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

      <div ref="up"></div>

      <div
        class="border-2 border-gray-500 dark:border-gray-300 flex-1 rounded-md mx-2"
      ></div>
      <p class="ml-2 text-sm">
        {{ audioTotalDuration + "/" + audioProgressDuration }}
      </p>
      <div @click="play()">
        <play-pause-icon :playPauseState="playPauseState" />
      </div>
      <audio controls>
        <source
          ref="audio"
          src="https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_5MG.mp3"
          type="audio/mpeg"
        />
        Your browser does not support the audio tag.
      </audio>
    </div>
  </div>
</template>

<script lang="ts">
import PlayPauseIcon from "@/components/icons/PlayPauseIcon.vue";
import SoundAdjusterIcon from "@/components/icons/SoundAdjusterIcon.vue";
import axios from "axios";
import { defineComponent, ref, onMounted } from "vue";
import { useChapterStore } from "@/stores/chapter";

export default defineComponent({
  components: {
    PlayPauseIcon,
    SoundAdjusterIcon,
  },

  setup() {
    // convert above variables to refs variables
    const versesAudioFilesList = ref([]);
    const audioHostDomainName = "https://audio.qurancdn.com/";
    const audioTotalDuration = ref("0:00:00");
    const audioProgressDuration = ref("0:00:00");
    const isMute = ref(false);
    const playPauseState = ref(false);
    const currentAudioIndex = ref(0);
    const currentDuration = ref(0);
    // define a ref for audio element with typescript
    const audio = ref<HTMLAudioElement | null>(null);

    onMounted(() => {
      let chapter = useChapterStore();
      console.log(chapter.reciter);
      fetchChapterVerseAudio();
    });

    // load verse audio
    async function fetchChapterVerseAudio() {
      await axios
        .get(
          `https://api.quran.com/api/v4/quran/recitations/1?chapter_number=1`
        )
        .then((response) => {
          versesAudioFilesList.value = response.data.audio_files;
          setDuration();

          console.log(versesAudioFilesList.value);
        })
        .catch((error) => console.log(error));
    }

    function setDuration() {
      let totalDuration = 0;
      for (let i = 0; i < versesAudioFilesList.value?.length; i++) {
        let audio = `${audioHostDomainName}${versesAudioFilesList.value[i]["url"]}`;
        var au = document.createElement("audio");
        au.src = audio;

        au.addEventListener(
          "loadedmetadata",
          function () {
            // Obtain the duration in seconds of the audio file (with milliseconds as well, a float value)
            var duration = au.duration;
            totalDuration += duration;
            // example 12.3234 seconds
            console.log(
              "The duration of the song is of: " + duration + " seconds"
            );
          },
          false
        );
      }
      console.log("total duration: " + totalDuration);
    }

    function play() {
      //  play audio
      if (audio.value) {
        if (audio.value.paused) {
          audio.value.play();
          playPauseState.value = true;
        } else {
          audio.value.pause();
          playPauseState.value = false;
        }
      }
    }
    return {
      audioTotalDuration,
      audioProgressDuration,
      isMute,
      playPauseState,
      play,
      currentDuration,
      audio,
    };
  },
});
</script>

<style></style>
