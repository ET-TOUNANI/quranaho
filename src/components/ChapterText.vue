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

      return {
        quran,
        chapterTranslation
      }
    }
  })
</script>

<template>
  <div
    id="text"
    class="dark:text-white leading-normal text-justify pt-4 min-h-screen lg:max-w-xl sm:mx-auto pb-16 mx-3"
  >
    <p
      class="arabic p-2 text-2xl text-center border-2 dark:text-gray-300 border-green-400 dark:border-green-400 bg-gray-100 dark:bg-gray-700 rounded"
    >
      <span class="px-1">{{ chapterTranslation }}</span>
      <span class="px-1">{{ quran.currentChapterName }}</span>
    </p>

    <div
      class="quran text-4xl p-5 whitespace-nowrap break-words border-2 rounded border-gray-600 mt-4"
    >
      <span class="whitespace-normal break-words leading-loose">
        <span v-for="word in quran.startingVerse.split(' ')" class="pt-1">
          {{ word.concat(' ') }}
        </span>
      </span>
      <span
        v-for="verse in quran.verses"
        :key="verse.verse_key"
        class="whitespace-normal break-words leading-loose"
      >
        <span v-for="word in verse.text_qpc_nastaleeq.split(' ')" class="pt-1">
          {{ word.concat(' ') }}
        </span>
      </span>
    </div>
  </div>
</template>

<style></style>
