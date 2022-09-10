<template>
  <section class="jumbotron relative pb-5 min-h-[60vh]">
    <iframe
      id="vimeoplayer"
      src="//player.vimeo.com/video/434167988?api=1&amp;background=1"
      class="absolute -top-14 left-0 min-w-full min-h-full -z-20"
    ></iframe>
    <div class="overlay absolute top-0 left-0 bg-[rgba(20,20,20,.4)]"></div>
    <navbar />
    <div class="h-[25vh] sm:h-[50vh] md:h-[55vh] lg:h-[60vh]"></div>
    <div
      class="flex justify-end px-4 sm:px-12 md:px-16 lg:px-20 xl:px-[100px] 2xl:px-0 2xl:max-w-[1700px] 2xl:mx-auto"
    >
      <a
        href="#"
        class="text-white border-2 text-[10px] uppercase font-bold tracking-[.3rem] px-[25px] py-[12px] block border-white hover:bg-white transition duration-3000 ease-linear hover:text-[#191606] group-hover:"
      >
        find footage
      </a>
    </div>
  </section>
</template>
<script setup>
import Navbar from "./Navbar.vue";
</script>
<style scoped>
.jumbotron {
  font-family: "Heebo", Arial, Helvetica, sans-serif;
}
iframe {
  background-color: #7e3a3a;
  
}
</style>
