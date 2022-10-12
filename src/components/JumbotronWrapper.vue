<template>
  <section class="bg-img" :style="{ '--bg': `url(/images/${bg}.jpg)` }">
    <navbar />
    <div
      class="px-4 sm:px-12 md:px-16 lg:px-20 xl:px-[100px] 2xl:px-0 py-4 2xl:max-w-[1700px] 2xl:mx-auto"
    >
      <h1
        class="uppercase text-center text-[2rem] sm:text-[105px] text-white px-[17px] pb-[17px] tracking-[0.03em] leading-[1.2em] font-medium"
      >
        {{ title }}
      </h1>
      <form class="pt-2" v-if="title === 'library'">
        <div class="relative">
          <input
            type="text"
            placeholder="Location, Tags, Codes... give it to me"
            class="w-full text-[#2e2e2e] pl-3 pr-[95px]"
          />
          <input type="button" value="Search" class="bg-[#2e2e2e] border border-[#f8f9fa] border-l-[#ced4da] hover:bg-[#f8f9fa] hover:text-[#2e2e2e] transition ease duration-300 cursor-pointer  max-h-full text-[#f8f9fa] absolute right-0 px-3" />
        </div>
      </form>
      <div v-else class="h-[2.4rem]"></div>
    </div>
  </section>
</template>
<script setup>
import Navbar from "./Navbar.vue";

const props = defineProps({
  title: String,
  bg: String,
});
</script>
<style scoped>
h1 {
  font-family: "TrumpGothicPro", Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 600;
}

.bg-img {
  background: var(--bg);
}
</style>
