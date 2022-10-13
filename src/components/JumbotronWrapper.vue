<script setup>
import Navbar from "./Navbar.vue";

const props = defineProps({
  title: String,
  bg: String,
  bgcolor: String,
});
</script>
<template>
  <section :class="`bg-img bg-no-repeat bg-fixed`" :style="`background-image: url(/bg-img/${bg}.jpg); background-color: ${bgcolor ? bgcolor : '#7e3a3a'}`">
    <div class="wrapper"></div>
    <navbar />
    <div
      class="px-4 sm:px-12 md:px-16 lg:px-20 xl:px-[100px] 2xl:px-0 py-4 2xl:max-w-[1700px] 2xl:mx-auto"
    >
      <h1
        class="uppercase text-center text-[2rem] font-bold sm:text-[105px] text-white pb-[1.5rem] tracking-[0.03em] leading-[1.2em]"
      >
        {{ title }}
      </h1>
      <form class="pt-2" v-if="title === 'library'">
        <div class="relative max-w-[48rem] mx-auto">
          <input
            type="text"
            placeholder="Location, Tags, Codes... give it to me"
            class="w-full text-[#2e2e2e] py-[.07rem] pl-3 pr-[95px] focus:border-none"
          />
          <input type="button" value="Search" class="bg-[#2e2e2e] border border-[#f8f9fa] py-[.07rem] border-l-[#ced4da] hover:bg-[#f8f9fa] hover:text-[#2e2e2e] transition ease duration-300 cursor-pointer  max-h-full text-[#f8f9fa] absolute right-0 px-3" />
        </div>
      </form>
      <div v-else class="h-[2.4rem]"></div>
    </div>
  </section>
</template>
<style scoped>
h1 {
  font-family: "TrumpGothicPro", Arial, Helvetica, sans-serif;
}
.bg-img{
  background-size: max(100%, 75rem);
  background-position: 0 25px;
}
@media screen and (min-width: 640px) {
  .bg-img{
    background-position: unset;
  }
}
/*overflow-x: hidden;
  scrollbar-width: none;
  -ms-overflow-style: none;*/
/*.bg-img::-webkit-scrollbar{
  display: none;
}*/
/*.wrapper{
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  transform-style: preserve-3d;
  z-index: -1;

}*/
/*.wrapper::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transform: translateZ(-1px) translateX(50px) scale(1.5) ;
  background-size: 100%;
  z-index: -1;
}*/
</style>
