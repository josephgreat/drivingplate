<template>
  <main
    class="bg-[#2e2e2e] py-12 px-4 sm:px-12 md:px-16 lg:px-20 xl:px-[100px] max-w-[1700px] mx-auto"
  >
    <Headline />
    <DrivingVideo />
    <Features />
  </main>
</template>
<script>
import Headline from "./Headline.vue";
import DrivingVideo from "./DrivingVideo.vue";
import Features from "./Features.vue";
export default {
  components: {
    Headline,
    DrivingVideo,
    Features
},
};
</script>
