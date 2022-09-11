<template>
   <section id="bg-container" class="jumbotron">
    <div class="fixed video-container">
      <video autoplay muted loop class="video">
        <source src="/video/diving.mp4" type="video/mp4" />
      </video>
    </div>
    <div class="overlay absolute top-0 left-0 bg-[rgba(20,20,20,.4)]"></div>
    <navbar />
    <!-- <div class="h-[25vh] sm:h-[40vh] md:h-[65vh] xl:h-[55vh] 2xl:h-[50vh]"></div> -->
    <div style="padding-bottom: 33.6%"></div>
    <div
      class="flex justify-end px-4 sm:px-12 md:px-16 lg:px-20 xl:px-[100px] 2xl:px-0 py-4 2xl:max-w-[1700px] 2xl:mx-auto"
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
.video-container {
  background-color: #7e3a3a;
  min-width: 100%;
  width: auto;
  min-height: 80vh;
  z-index: -1;  
}
.video {
  max-width: 800px;
  background: url("/video/video-palceholder.png");
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  transition: all .3s ease;
}

@media screen and (min-width: 640px) {
  .video {
    max-width: 1200px;
  }
}
@media screen and (min-width: 768px) {
  .video {
    max-width: 1400px;
  }
}
@media screen and (min-width: 1100px) {
  .video {
    max-width: none;
    width: 100vw;
  }
}
</style>
