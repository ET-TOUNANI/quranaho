<template>
  <div
    class="chapter__container dark:text-white text-black quran text-3xl text-center "
    :class="
      verses.length < 36
        ? 'sm:max-w-sm md:max-w-md lg:max-w-md mx-auto text-center'
        : ''
    "
  >
    <span class="quran" v-if="chapterId != 1 && chapterId != 9">
      <span
        v-for="(word, index) in startingVerse.split(' ')"
        :key="index"
        class="hover:text-green-300 delay-100"
        >{{ word + " " }}
      </span>
    </span>
    <span v-for="verse in verses" :key="verse.id">
      <span
        v-for="(word, index) in verse.text_indopak.split(' ')"
        :key="index"
        class="hover:text-green-300 delay-100"
        >{{ word + " " }}
      </span>
      <span class="text-gray-700 relative">
        <span
          class="pt-2 absolute w-full h-full text-lg text-center font-bold"
          >{{ verse.verse_key.split(":")[1] }}</span
        >
        <span class="chapter__verseNumberIcon">
         <verse-icon/>
        </span>
      </span>
    </span>
  </div>
</template>

<script>
import VerseIcon from "@/components/VerseIcon.vue"
export default {
  components: {
    VerseIcon
  },
  props: {
    chapterId: {
      type: [Number, String]
    },
    startingVerse: {
      type: [String, Object]
    },
    verses: {
      type: [Array, Object]
    }
  }
};
</script>

<style>
.chapter__verseNumberIcon,
.chapter__verseNumberIcon svg {
  height: 40px;
  display: inline-block;
}
</style>
