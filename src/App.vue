<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import FaqPage from "./components/pages/FaqPage.vue";
// import ContactUs from "./components/pages/ContactUs.vue";
// import Library from "./components/pages/Library.vue";
import FooterSection from './components/FooterSection.vue';
// import LandingPage from './components/pages/LandingPage.vue';
</script>

<template>
  <div>
    <!-- <contact-us/> -->
    <!-- <faq-page/> -->
    <!-- <library/> -->
    <!-- <landing-page/> -->
    <RouterView/>
    <footer-section />
  </div>
</template>

<style scoped></style>
