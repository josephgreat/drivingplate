<template>
  <main class="bg-[#2e2e2e]">
    <div
      class="max-w-[1700px] mx-auto py-12 px-4 sm:px-12 md:px-16 lg:px-20 xl:px-[100px] 2xl:px-0"
    >
      <Headline />
      <DrivingVideo />
      <Features />
      <Slider />
      <Review />
    </div>
  </main>
</template>
<script>
import Headline from './Headline.vue';
import DrivingVideo from './DrivingVideo.vue';
import Features from './Features.vue';
import Slider from './Slider.vue';
import Review from './Review.vue';
export default {
  components: {
    Headline,
    DrivingVideo,
    Features,
    Slider,
    Review,
  },
};
</script>
