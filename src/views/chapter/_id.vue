<template>
  <div class="chapter w-full">
    <chapter-header
      v-on:changeChapter="changeChapter"
      v-on:changeHizb="changeHizb"
    />
    <div class="container mx-auto">
      <chapter-text
        v-if="isLoaded"
        :chapterNumber="chapterNumber"
        :startingVerse="startingVerse"
        :verses="verses"
      />
      <Loading v-else />
    </div>
  </div>
</template>

<script lang="ts">
import ChapterText from "@/components/partials/ChapterText.vue";
import ChapterHeader from "@/components/partials/ChapterHeader.vue";
import axios from "axios";
import { defineComponent } from "vue";

import Loading from "@/components/Loading.vue";
interface Verse {
  number: number;
  text: string;
  name_arabic: string;
}

export default defineComponent({
  data() {
    return {
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
    Loading,
  },
  mounted() {
    this.chapterNumber = Number(this.$route.params.id);
    this.fetchStartingVerse();
    this.fetchChapter();
  },

  methods: {
    // load the whole chapter
    async fetchChapter() {
      await axios
        .get(
          `https://api.quran.com/api/v4/quran/verses/indopak?chapter_number=${this.chapterNumber}`
        )
        .then((response) => {
          this.verses = response.data.verses;
          setTimeout(() => {
            this.isLoaded = true;
          }, 1000);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    // load the first verse for the rest of chapters
    async fetchStartingVerse() {
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
    async fetchHizb(hizbNumber: number) {
      await axios
        .get(
          `https://api.quran.com/api/v4/quran/verses/indopak?hizb_number=${hizbNumber}`
        )
        .then((response) => {
          this.verses = response.data.verses;
          setTimeout(() => {
            this.isLoaded = true;
          }, 1000);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    // fetch new chapter
    changeChapter(chapterNumber: number) {
      this.$router.push({ name: "Chapter", params: { id: chapterNumber } });
      this.isLoaded = false;
      this.chapterNumber = chapterNumber;
      this.fetchStartingVerse();
      this.fetchChapter();
    },

    // fetch new hizb
    changeHizb(hizbNumber: number) {
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
