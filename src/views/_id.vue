<template>
  <div class="chapter text-white bg-gray-800">
    <div class="container mx-auto">
      <!-- {{ JSON.stringify(chapter) }} -->
      <div class="chapter__container quran text-2xl flex flex-wrap">
        <tamplate v-for="verse in verses" :key="verse.id" class="inline-flex">
          <span
            v-for="(word, index) in verse.text_indopak.split(' ')"
            :key="index"
            >{{ word }}</span
          >
          <img
            src="../assets/verse-number-bg.png"
            class="h-8 w-8 mx-2"
            alt=""
          />
        </tamplate>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      error: {
        type: String,
        default: ""
      },
      chapter: {},
      verses: {}
    };
  },
  mounted() {
    console.log(this.$route);
    let chapterId = this.$route.params.id;
    this.fetchChapter(chapterId);
  },
  methods: {
    async fetchChapter(id) {
      try {
        await axios
          .get(
            `https://api.quran.com/api/v4/quran/verses/indopak?chapter_number=${id}`
          )
          .then(response => {
            console.log("Reponse Data");
            console.log(response);
            this.chapter = response.data;
            this.verses = response.data.verses;
          })
          .catch(error => {
            this.error = error;
          });
      } catch (error) {
        this.error = error;
      }
    }
  }
};
</script>

<style>
.chapter {
  height: 100%;
}
.chapter__container {
  line-height: 3rem;
}
</style>
