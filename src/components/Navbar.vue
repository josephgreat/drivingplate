<template>
  <header
    class="bg-[#191606] sm:bg-transparent z-10 py-3 lg:pt-3 xl:pt-6 px-4 sm:px-12 md:px-16 lg:px-20 xl:px-[100px] 2xl:px-0 2xl:max-w-[1700px] 2xl:mx-auto flex sm:py-4 justify-between items-center relative"
  >
    <a href="#" class="w-1/3 md:w-1/4">
      <img src="../assets/images/logo.png" />
    </a>
    <nav
      class="text-[20px] sm:text-[13px] font-medium tracking-[0.25] leading-7"
    >
      <button class="sm:hidden" @click="toggleNavbar = !toggleNavbar">
        <i class="fas fa-bars text-white"></i>
      </button>
      <div v-if="toggleNavbar">
        <div
          @click="toggleNavbar = !toggleNavbar"
          class="bg-[rgba(31,28,16,.65)] animate-[fadein_.3s_ease-in-out] transition-all duration-300 ease-in-out sm:hidden absolute top-0 left-0 w-screen h-screen"
        ></div>
        <button
          @click="toggleNavbar = !toggleNavbar"
          class="text-white animate-[fadein_.3s_ease-in-out] transition-all duration-300 ease-in-out sm:hidden absolute left-0 top-0 px-5 py-3"
        >
          <i class="fas fa-close text-white text-lg"></i>
        </button>
        <ul
          class="flex flex-col flex-wrap justify-end animate-[slidein_.3s_ease-in-out] transition-all duration-300 ease-in-out sm:flex-row p-9 sm:p-0 h-screen sm:h-auto w-[85vw] sm:w-auto bg-[#191606] sm:bg-transparent right-0 top-0 absolute sm:relative text-white uppercase"
        >
          <li
            class="nav-link pb-2.5 sm:pb-0 sm:mx-3 transition duration-300 ease-linear sm:hover:text-gray-400"
          >
            <a href="#">library</a>
          </li>
          <li
            class="nav-link pb-2.5 sm:pb-0 sm:mx-3 transition duration-300 ease-linear sm:hover:text-gray-400"
          >
            <a href="#">news</a>
          </li>
          <li
            class="nav-link pb-2.5 sm:pb-0 sm:mx-3 transition duration-300 ease-linear sm:hover:text-gray-400"
          >
            <a href="#">faq</a>
          </li>
          <li
            class="nav-link pb-2.5 sm:pb-0 sm:mx-3 transition duration-300 ease-linear sm:hover:text-gray-400"
          >
            <a href="#">contact</a>
          </li>
          <li
            class="nav-link pb-2.5 sm:pb-0 sm:mx-3 transition duration-300 ease-linear sm:hover:text-gray-400"
          >
            <a href="#">home</a>
          </li>
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
  mounted() {
    this.isMobile();
    window.addEventListener('resize', this.isMobile, { passive: true });
  },
  methods: {
    isMobile() {
      window.innerWidth < 640
        ? (this.toggleNavbar = false)
        : (this.toggleNavbar = true);
    },
  },
};
</script>

<style scoped>
.nav-link{
  font-family: Heebo;
    font-weight: 500;
    font-style: normal;
    font-size: 14px;
    letter-spacing: .2em;
}
@keyframes slidein {
  from {
    right: -100%;
  }
  to {
    right: 0;
  }
}
@keyframes fadein {
  from {
    opacity: 0.5;
  }
  to {
    opacity: 1;
  }
}
</style>
