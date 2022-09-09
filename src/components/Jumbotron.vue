<template>
  <section class="jumbotron pb-5 min-h-[60vh]">
    <div class="overlay absolute top-0 left-0 bg-[rgba(20,20,20,.4)]"></div>
    <navbar />
    <div class="h-[50vh] sm:h-[60vh] md:h-[65vh]"></div>
    <div class="flex justify-end px-4 sm:px-12 md:px-16 lg:px-20 xl:px-[100px] 2xl:px-0 2xl:max-w-[1700px] 2xl:mx-auto">
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
.jumbotron {
  background-image: url("../assets/images/jumbo2.jpg");
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #7e3a3a;
}
</style>
