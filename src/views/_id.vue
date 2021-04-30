<template>
  <div class="chapter text-white">
    <div class="container mx-auto">
      <!-- {{ JSON.stringify(chapter) }} -->
      <div class="chapter__container">
        <span class="quran text-2xl" v-for="(verse) in verses" :key="verse.id"
          >{{ verse.text_indopak }}
        </span>
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
            `https://api.quran.com/api/v4/quran/verses/indopak?chapter_number=1`
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
