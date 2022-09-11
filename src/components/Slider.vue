<template>
  <section class="pb-28">
    <Carousel :autoplay="2000" :wrap-around="true" :settings="settings">
      <Slide v-for="n in 19" :key="n">
        <div class="carousel_item">
          <img class="" :src="`/images/slide${n}.jpg`" loading="lazy" />
        </div>
      </Slide>
      <template #addons>
        <Slide />
        <Navigation />
      </template>
    </Carousel>
  </section>
</template>
<script>
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

export default {
  name: 'Autoplay',
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      settings: {
        itemsToShow: 5,
        snapAlign: 'center',
        autoplay: false,
      },
    };
  },
  methods: {
    createImageURL(n) {
      let image = require.context('../assets/imagges/slide', false, /\.jpg$/);
      return image(`${n}`);
    },
  },
};
</script>
<style>
.carousel .carousel__prev,
.carousel .carousel__next {
  background: rgba(0, 0, 0, 0.1);
  padding: 1rem 0;
  font-size: calc(2rem, 3rem + 5vw, 2rem + 7vw);
  border-radius: unset;
  right: 1rem;
  transition: background 0.3s ease;
}
.carousel__next:hover,
.carousel__prev:hover {
  background: rgba(0, 0, 0, 0.3);
}
.carousel .carousel__prev {
  left: 1rem;
  right: 0;
}
</style>
