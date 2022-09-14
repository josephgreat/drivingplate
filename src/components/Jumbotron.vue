<template>
  <section id="bg-container" class="jumbotron">
    <div class="fixed video-container">
      <iframe
        src="https://player.vimeo.com/video/434167988?background=1&autoplay=1&loop=1&byline=0&title=0"
      ></iframe>
    </div>
    <navbar />
    <div class="jumbotron-spacer">&nbsp;</div>
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
import Navbar from './Navbar.vue';
</script>
<style scoped>
.jumbotron {
  font-family: 'Heebo', Arial, Helvetica, sans-serif;
  max-height: 725px;
  height: 44vw;
}
.jumbotron-spacer {
  height: calc(100% - 160px);
}
.video-container {
  background-color: #7e3a3a;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 44vw;
  z-index: -1;
  pointer-events: none;
  overflow: hidden;
  max-height: 44vw;
}

.video-container iframe {
  width: 112vw;
  height: 50vw;
  min-height: 50vw;
  min-width: 100vw;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: url('/video/video-palceholder.png');
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  transition: all 0.3s ease;
}
@media (max-width: 640px) {
  .jumbotron-spacer {
    height: calc(100% - 145px);
  }
}
</style>
