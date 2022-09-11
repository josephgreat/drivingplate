<template>
  <section id="bg-container" class="jumbotron">
    <div class="fixed video-container">
      <iframe
        src="https://player.vimeo.com/video/434167988?background=1&autoplay=1&loop=1&byline=0&title=0"
      ></iframe>
    </div>
    <navbar />
    <div style="padding-bottom: 25.6312%">&nbsp;</div>
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
}
.video-container {
  background-color: #7e3a3a;
  background-color: transparent;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
  overflow: hidden;
}

.video-container iframe {
  width: 4627.2px;
  height: 56.25vw; /* Given a 16:9 aspect ratio, 9/16*100 = 56.25 */
  min-height: 100vh;
  min-width: 177.77vh; /* Given a 16:9 aspect ratio, 16/9*100 = 177.77 */
  position: absolute;
  top: 37%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: url('/video/video-palceholder.png');
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  transition: all 0.3s ease;
}


</style>
