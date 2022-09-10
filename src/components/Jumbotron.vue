<template>
   <section id="bg-container" class="jumbotron">
    <div class="fixed video">
      <video autoplay muted loop class="max-w-none">
        <source src="../../public/video/diving.mp4" type="video/mp4" />
      </video>
    </div>
    <div class="overlay absolute top-0 left-0 bg-[rgba(20,20,20,.4)]"></div>
    <navbar />
    <div class="h-[25vh] sm:h-[50vh] md:h-[55vh] lg:h-[60vh] xl:h-[55vh] 2xl:h-[50vh]"></div>
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
.video {
  background-color: #7e3a3a;
  background: url("../../public/video/video-palceholder.png");
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  min-width: 100%;
  width: auto;
  min-height: 80vh;
  z-index: -1;  
}
#bg-container {
  overflow: hidden;
}
#vimeoplayer {
  width: 680px;
  height: calc(25vh + 150px);
  left: -20px;
}

@media screen and (min-width: 640px) {
  #vimeoplayer {
    width: 1150px;
    height: calc(57vh + 200px);
    top: -7vh;
    left: -20px;
  }
}
@media screen and (min-width: 768px) {
  #vimeoplayer {
    width: 1400px;
    height: calc(72vh + 200px);
    top: -12vh;
    left: -20px;
  }
}
@media screen and (min-width: 1024px) {
  #vimeoplayer {
    width: 1400px;
    height: calc(72vh + 200px);
    top: -12vh;
    left: -55px;
  }
}
@media screen and (min-width: 1024px) {
  #vimeoplayer {
    width: 1400px;
    height: calc(72vh + 200px);
    top: -12vh;
    left: -55px;
  }
}
@media screen and (min-width: 1400px) {
  #vimeoplayer {
    width: 110vw;
    /* height: calc(72vh + 200px); */
    top: -10vh;
    left: 0;
  }
}
</style>
