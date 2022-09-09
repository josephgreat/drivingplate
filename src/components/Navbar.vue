<template>
  <header
    class="bg-[#191606] sm:bg-transparent py-2 px-3 flex justify-between items-center relative"
  >
    <a href="#" class="w-1/4">
      <img src="../assets/images/logo.png" />
    </a>
    <nav>
      <button @click="toggleNavbar = !toggleNavbar">
        <i class="fas fa-bars text-white"></i>
      </button>
      <div v-if="toggleNavbar">
        <div
          @click="toggleNavbar = !toggleNavbar"
          class="bg-[rgba(31,28,16,.65)] absolute top-0 left-0 w-screen h-screen"
        ></div>
        <button
          @click="toggleNavbar = !toggleNavbar"
          class="text-white absolute left-0 top-0 px-5 py-3"
        >
          <i class="fas fa-close text-white text-lg"></i>
        </button>
        <ul
          class="flex flex-col p-9 h-screen w-[85vw] bg-[#191606] right-0 top-0 absolute text-white uppercase text-[13px]"
        >
          <li class="pb-2.5 cursor-pointer"><a>library</a></li>
          <li class="pb-2.5 cursor-pointer"><a>news</a></li>
          <li class="pb-2.5 cursor-pointer"><a>faq</a></li>
          <li class="pb-2.5 cursor-pointer"><a>contact</a></li>
          <li class="pb-2.5 cursor-pointer"><a>home</a></li>
        </ul>
      </div>
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
  font-family: "Heebo", Arial, Helvetica, sans-serif;
  font-weight: 500;
  line-height: 1.8rem;
  letter-spacing: 0.25rem;
  /*font-size: 13px; */
}
</style>
