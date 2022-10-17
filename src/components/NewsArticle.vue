<script setup>
const props = defineProps({
  title: String,
  date: String,
});
</script>
<template>
  <article class="article mb-[100px] first:before:content-none before:contents[''] before:sm:min-w-[240px] before:sm:w-1/2 before:bg-[#bdbdbd] before:h-[1px] before:block before:mt-[70px] before:mx-auto before:mb-[50px] before:w-3/4">
    <header>
      <h2
        class="uppercase text-center text-[67px] leading-[3em] tracking-[.075em]"
      >
        <a href="#">{{title}}</a>
      </h2>
      <p
        class="uppercase text-center mb-8 text-[rgba(191,191,191,.7)] font-['Heebo'] tracking-[.2em] text-[9.75px]"
      >
        <time>{{date}}</time>
      </p>
    </header>
    <main>
      <slot name="content"></slot>
    </main>
  </article>
</template>
<style>
.iframe-container {
  position: relative;
  width: 100%;
  overflow: hidden;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
}
.responsive-iframe {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border: none;
}
@keyframes fade {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}

</style>
