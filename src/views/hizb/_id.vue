<template>
  <div class="chapter text-white dark:bg-gray-800">
    <chapter-header
      v-on:changeChapter="changeChapter"
      v-on:changeHizb="changeHizb"
    />
    <div class="container mx-auto">
      <div
        v-if="!isLoaded"
        class="text-gray-800 dark:text-gray-100 absolute w-40 inset-1/2"
      >
        {{ translatedWords.loading + "..." }}
      </div>
      <chapter-text
        v-else
        :chapterNumber="chapterNumber"
        :startingVerse="startingVerse"
        :verses="verses"
      />
    </div>
    <audio-player />
  </div>
</template>

<script lang="ts">
import ChapterText from "@/components/partials/ChapterText.vue";
import ChapterHeader from "@/components/partials/ChapterHeader.vue";
import AudioPlayer from "@/components/partials/AudioPlayer.vue";
import axios from "axios";
import { defineComponent } from "vue";

 interface Verse {
  number: number;
  text: string;
}

export default defineComponent({
  data() {
    return {
      translatedWords: {
        loading: "جار التحميل",
      },
      verses: [] as Verse[],
      startingVerse: "" as string,
      chapterNumber: 0 as number,
      isLoaded: false as boolean,
      hizbNumber: 0 as number,
    };
  },
  components: {
    ChapterText,
    ChapterHeader,
    AudioPlayer,
  },
  created() {
    this.hizbNumber = Number(this.$route.params.id);
    this.fetchStartingVerse();
    this.fetchHizb(this.hizbNumber);
  },

  methods: {
    // load the first verse for the rest of chapters
    async fetchStartingVerse(): Promise<void> {
      let id = 1;
      await axios
        .get(
          `https://api.quran.com/api/v4/quran/verses/indopak?chapter_number=${id}`
        )
        .then((response) => {
          this.startingVerse = response.data.verses[0].text_indopak;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    // fetch hizb
    async fetchHizb(hizbNumber: number): Promise<void> {
      await axios
        .get(
          `https://api.quran.com/api/v4/quran/verses/indopak?hizb_number=${hizbNumber}`
        )
        .then((response) => {
          this.verses = response.data.verses;
          this.isLoaded = true;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    // fetch new chapter
    changeChapter(chapterNumber: number): void {
      this.$router.push({ name: "Chapter", params: { id: chapterNumber } });
      this.isLoaded = false;
      this.chapterNumber = chapterNumber;
      this.fetchStartingVerse();
      // this.fetchChapter();
    },

    // fetch new hizb
    changeHizb(hizbNumber: number): void {
      this.isLoaded = false;
      this.fetchStartingVerse();
      this.fetchHizb(hizbNumber);
    },
  },
});
</script>

<style>
.chapter__container {
  line-height: 4rem;
}
.chapter__verseNumberIcon,
.chapter__verseNumberIcon svg {
  height: 40px;
  display: inline-block;
}
</style>
