<template>
    <div v-if="playVideo" class="iframe-container">
      <iframe
        src="https://player.vimeo.com/video/315795892?app_id=122963&amp;wmode=opaque&amp;autoplay=1"
        width="640"
        height="360"
        frameborder="0"
        title="DrivingPlates Clip Set Preview"
        allow="autoplay; fullscreen"
        allowfullscreen=""
        style="opacity: 1"
        class="responsive-iframe"
      ></iframe>
    </div>
    <div class="relative" v-else>
      <img
        data-src="https://images.squarespace-cdn.com/content/v1/50fb213fe4b0499abb0325a0/1407825273560-PSI9V5H6T7HXQNYDM6NF/Screen+Shot+2014-08-11+at+11.33.47+PM.png"
        data-load="false"
        data-image-focal-point="0.5,0.5"
        class="loaded align-middle w-full"
        data-image-dimensions="100x56"
        data-parent-ratio="1.8"
        data-image-resolution="2500w"
        @click="playVideo = !playVideo"
        style="position: relative; left: -2.67857px"
        src="https://images.squarespace-cdn.com/content/v1/50fb213fe4b0499abb0325a0/1407825273560-PSI9V5H6T7HXQNYDM6NF/Screen+Shot+2014-08-11+at+11.33.47+PM.png?format=2500w"
      />

      <button
        @click="playVideo = !playVideo"
        class="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 hover:bg-[#2e2e2e] transition duration-300 ease-in-out rounded-md p-2"
      >
        <img src="../assets/images/play-button.png" />
      </button>
    </div>
</template>
<script>
export default {
  data() {
    return {
      playVideo: false,
    };
  },
};
</script>

<style scoped>
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
</style>
