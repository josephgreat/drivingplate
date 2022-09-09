<template>
  <header
    class="bg-[#191606] sm:bg-transparent py-2 lg:pt-3 xl:pt-6 px-4 sm:px-12 md:px-16 lg:px-20 xl:px-[100px] 2xl:px-0 2xl:max-w-[1700px] 2xl:mx-auto flex sm:py-4 justify-between items-center relative"
  >
    <a href="#" class="w-1/4">
      <img src="../assets/images/logo.png" />
    </a>
    <nav>
      <button class="sm:hidden" @click="toggleNavbar = !toggleNavbar">
        <i class="fas fa-bars text-white"></i>
      </button>
      <!-- mobile -->
      <div v-if="toggleNavbar">
        <div
          @click="toggleNavbar = !toggleNavbar"
          class="bg-[rgba(31,28,16,.65)] absolute top-0 left-0 w-screen h-screen"
        ></div>
        <button
          @click="toggleNavbar = !toggleNavbar"
          class="text-white sm:none absolute left-0 top-0 px-5 py-3"
        >
          <i class="fas fa-close text-white text-lg"></i>
        </button>
        <ul
          class="flex flex-col p-9 h-screen w-[85vw] bg-[#191606] right-0 top-0 absolute text-white uppercase"
        >
          <li class="pb-2.5 cursor-pointer"><a href="#">library</a></li>
          <li class="pb-2.5 cursor-pointer"><a href="#">news</a></li>
          <li class="pb-2.5 cursor-pointer"><a href="#">faq</a></li>
          <li class="pb-2.5 cursor-pointer"><a href="#">contact</a></li>
          <li class="pb-2.5 cursor-pointer"><a href="#">home</a></li>
        </ul>
      </div>
      <!-- desktop -->
      <ul
      class="hidden sm:flex flex-row text-white uppercase text-[14px]"
    >
      <li class="mx-3 transition duration-3000 ease-linear hover:text-gray-400"><a href="#">library</a></li>
      <li class="mx-3 transition duration-3000 ease-linear hover:text-gray-400"><a href="#">news</a></li>
      <li class="mx-3 transition duration-3000 ease-linear hover:text-gray-400"><a href="#">faq</a></li>
      <li class="mx-3 transition duration-3000 ease-linear hover:text-gray-400"><a href="#">contact</a></li>
      <li class="mx-3 transition duration-3000 ease-linear hover:text-gray-400"><a href="#">home</a></li>
    </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      toggleNavbar: false,
    };
  },
};
</script>

<style scoped>
nav {
  font-weight: 500;
  line-height: 1.8rem;
  letter-spacing: 0.25rem;
  /*font-size: 13px; */
}
</style>
