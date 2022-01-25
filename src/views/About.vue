<template>
  <div class="about h-screen">
    <div class="container mx-auto">
      <img
        class="mx-auto rounded-md h-44 my-8"
        src="https://unsplash.com/photos/kZ1zThg6G40/download?force=true&w=640"
        alt=""
      />

      <div class="text-lg text-gray-800 text-left w-full dark:text-gray-100">
        <h1 class="text-3xl font-black pt-4 text-green-400">Quran</h1>
        <p class="pt-2">
          The Quran (/kʊrˈɑːn/, kuurr-AHN;[i] Arabic: القرآن al-Qurʼān
          [alqurˈʔaːn],[ii] "the recitation"), also romanized Qur'an or
          Koran,[iii] is the central religious text of Islam, believed by
          Muslims to be a revelation from God (Allah).[11] It is widely regarded
          as the finest work in classical Arabic literature.[12][13][iv][v] It
          is organized in 114 chapters (pl.: سور suwar, sing.: سورة sūrah),
          which consist of verses (pl.: آيات āyāt, sing.: آية āyah, cons.:
          āyat).
        </p>
        <h1 class="text-3xl font-black pt-4 text-green-400">Developers</h1>
        <p class="pt-2">
          This website was built by me (Ahmed Al-Habash) using Vue.js, Tailwind
          CSS, and Firebase. I am a software engineer and a student at the
          University of Jordan. I am currently working on a project to build a
          mobile application for the Quran. T The Quran is a collection of the
          Arabic and English versions of the holy book of God. It is the first
          and only book of the holy Quran.
        </p>
        <h1 class="text-3xl font-black pt-4 text-green-400">Credits</h1>
        <p class="pt-2">
          This website was created by a few volunteers and was made possible
          with the will of Allah (Glory be unto Him) and with the help of the
          open source Muslim community online. Data sources include Tanzil,
          QuranComplex, Colin Fair's work on audio segments, QuranEnc, Zekr and
          Online Quran Project. If you have any questions, you may visit
          thecontactpage.
        </p>

        <!-- buy me coffee button -->
        <div class="flex justify-center mt-8">
          <a href="https://ko-fi.com/K3K690OEW" target="_blank"
            ><img
              height="40"
              style="border: 0px; height: 40px; padding: 0px 10px;"
              src="https://cdn.ko-fi.com/cdn/kofi1.png?v=3"
              alt="Buy Me a Coffee at ko-fi.com"
          /></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      message: "إشتري لي قهوة",
    };
  },
});
</script>
