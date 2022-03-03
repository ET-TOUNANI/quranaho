<script lang="ts">
  import VerseIcon from '@/components/icons/VerseIcon.vue'
  import { defineComponent } from 'vue'
  import { useQuranStore } from '@/stores/quran'

  export default defineComponent({
    components: {
      VerseIcon
    },
    props: {
      chapterNumber: {
        default: 0,
        type: Number
      },
      startingVerse: {
        default: '',
        type: String
      },
      verses: {
        default: () => [],
        type: Array
      }
    },

    setup() {
      const quran = useQuranStore()
      quran.fetchchaptersInfo()

      const chapterTranslation = 'سورة'

      function getVerseNumber(verse: string) {
        return Number(verse.verse_key.split(':')[1])
      }

      return {
        quran,
        getVerseNumber,
        chapterTranslation
      }
    }
  })
</script>

<template>
  <div
    id="text"
    class="quran dark:text-white text-black leading-normal text-justify pt-4 min-h-screen lg:max-w-xl sm:mx-auto pb-16 mx-3"
  >
    <span v-for="verse in quran.verses" :key="verse.id">
      <span v-if="getVerseNumber(verse) == 1">
        <p
          class="px-5 mb-5 w-full text-center border-2 dark:text-gray-300 border-green-400 dark:border-green-400 bg-gray-100 dark:bg-gray-700 rounded"
        >
          {{ chapterTranslation + ' ' + quran.currentChapterName }}
        </p>

        <span v-if="chapterNumber != 9 && chapterNumber != 1">
          <span v-for="(word, index) in quran.startingVerse.split(' ')" :key="index"
            >{{ word + ' ' }}
          </span>
        </span>
      </span>
      <span v-for="(word, index) in verse.text_indopak.split(' ')" :key="index"
        >{{ word + ' ' }}
      </span>
      <span class="relative">
        <span class="pt-3 text-gray-800 absolute w-full h-full text-lg text-center font-bold">{{
          getVerseNumber(verse)
        }}</span>
        <span class="chapter__verseNumberIcon">
          <verse-icon />
        </span>
      </span>
    </span>
  </div>
</template>

<style>
  .chapter__verseNumberIcon,
  .chapter__verseNumberIcon svg {
    height: 40px;
    display: inline-block;
  }
  .card {
    background: rgba(255, 255, 255, 0.25) !important;
    box-shadow: 0 3px 8px 0 rgb(31 38 135 / 37%) !important;
    backdrop-filter: blur(4px) !important;
    -webkit-backdrop-filter: blur(4px) !important;
    border-radius: 8px !important;
    border: 1px solid rgba(255, 255, 255, 0.18) !important;
  }

  #text,
  #text * {
    overflow-y: hidden;
  }

  /* define break points for text size from mobile to tv */
  @media (min-width: 320px) {
    #text {
      font-size: 1.5rem;
    }
  }

  @media (min-width: 768px) {
    #text {
      font-size: 2.5rem;
    }
  }

  @media (min-width: 1024px) {
    #text {
      font-size: 2.8rem;
    }
  }

  /* // Small devices (landscape phones, 576px and up)
@media (min-width: 576px) {
}

/* // Medium devices (tablets, 768px and up) */
  @media (min-width: 768px) {
  }

  /* // Large devices (desktops, 992px and up) */
  @media (min-width: 992px) {
  }

  /* // Extra large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {
  }
</style>
