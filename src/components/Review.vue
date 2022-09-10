<template>
  <section class="pb-12 md:pb-24">

    <div class="flex items-center flex-col gap-4 sm:flex-row">
      <div class="w-[100%] sm:w-[15%] md:w-[20%] lg:w-[25%]">
        <hr>
      </div>
      <div class="relative w-[100%] sm:w-[70%] md:w-[60%] lg:w-[50%] md:m-6 pb-[28.5%]">
        <figure class="review transition duration-300 ease-linear absolute w-full top-0 sm:top-1/4 left-1/2 -translate-x-1/2">
          <img
            class="thumb-image loaded"
            data-src="https://images.squarespace-cdn.com/content/v1/50fb213fe4b0499abb0325a0/1503022377779-MLGVPDVHBQ9ALKTVAIBC/Big+Dogs.jpg"
            data-image="https://images.squarespace-cdn.com/content/v1/50fb213fe4b0499abb0325a0/1503022377779-MLGVPDVHBQ9ALKTVAIBC/Big+Dogs.jpg"
            data-image-dimensions="960x300"
            data-image-focal-point="0.5,0.5"
            data-load="false"
            data-image-id="59964d29ebbd1a09cdc7e780"
            data-type="image"
            data-parent-ratio="3.2"
            id="yui_3_17_2_1_1662727384692_3470"
            alt="Big Dogs.jpg"
            data-image-resolution="750w"
            src="https://images.squarespace-cdn.com/content/v1/50fb213fe4b0499abb0325a0/1503022377779-MLGVPDVHBQ9ALKTVAIBC/Big+Dogs.jpg?format=750w"
          />
        </figure>
  
        <figure class="review transition duration-300 ease-linear absolute w-full top-0 sm:top-1/4 left-1/2 -translate-x-1/2">
          <img
            class="thumb-image loaded"
            data-src="https://images.squarespace-cdn.com/content/v1/50fb213fe4b0499abb0325a0/1503022377835-O3X6HUPJOI9D4PDP8MHK/Blindspot.jpg"
            data-image="https://images.squarespace-cdn.com/content/v1/50fb213fe4b0499abb0325a0/1503022377835-O3X6HUPJOI9D4PDP8MHK/Blindspot.jpg"
            data-image-dimensions="960x300"
            data-image-focal-point="0.5,0.5"
            data-load="false"
            data-image-id="59964d29cd39c3a9e4439579"
            data-type="image"
            data-parent-ratio="3.2"
            alt="Blindspot.jpg"
            data-image-resolution="750w"
            src="https://images.squarespace-cdn.com/content/v1/50fb213fe4b0499abb0325a0/1503022377835-O3X6HUPJOI9D4PDP8MHK/Blindspot.jpg?format=750w"
            id="yui_3_17_2_1_1662727384692_3662"
          />
        </figure>
  
        <figure class="review transition duration-300 ease-linear absolute w-full top-0 sm:top-1/4 left-1/2 -translate-x-1/2">
          <img
            class="thumb-image loaded"
            data-src="https://images.squarespace-cdn.com/content/v1/50fb213fe4b0499abb0325a0/1503022377971-BBLNY40KYR5MF9U7ZV46/Empire.jpg"
            data-image="https://images.squarespace-cdn.com/content/v1/50fb213fe4b0499abb0325a0/1503022377971-BBLNY40KYR5MF9U7ZV46/Empire.jpg"
            data-image-dimensions="960x300"
            data-image-focal-point="0.5,0.5"
            data-load="false"
            data-image-id="59964d29e4fcb50cf88fea68"
            data-type="image"
            data-parent-ratio="3.2"
            alt="Empire.jpg"
            data-image-resolution="750w"
            src="https://images.squarespace-cdn.com/content/v1/50fb213fe4b0499abb0325a0/1503022377971-BBLNY40KYR5MF9U7ZV46/Empire.jpg?format=750w"
            id="yui_3_17_2_1_1662727384692_3873"
          />
        </figure>
  
        <figure class="review transition duration-300 ease-linear absolute w-full top-0 sm:top-1/4 left-1/2 -translate-x-1/2">
          <img
            class="thumb-image loaded"
            data-src="https://images.squarespace-cdn.com/content/v1/50fb213fe4b0499abb0325a0/1503022378197-OT7BVZK3274HLTVXFM79/The+Commuter.jpg"
            data-image="https://images.squarespace-cdn.com/content/v1/50fb213fe4b0499abb0325a0/1503022378197-OT7BVZK3274HLTVXFM79/The+Commuter.jpg"
            data-image-dimensions="960x300"
            data-image-focal-point="0.5,0.5"
            data-load="false"
            data-image-id="59964d2a6f4ca35ca6047745"
            data-type="image"
            data-parent-ratio="3.2"
            alt="The Commuter.jpg"
            data-image-resolution="750w"
            src="https://images.squarespace-cdn.com/content/v1/50fb213fe4b0499abb0325a0/1503022378197-OT7BVZK3274HLTVXFM79/The+Commuter.jpg?format=750w"
            id="yui_3_17_2_1_1662727384692_4883"
          />
        </figure>
      </div>
      <div class="w-[100%] sm:w-[15%] md:w-[20%] lg:w-[25%]">
        <hr>
      </div>
    </div>
  </section>
</template>
<script>
  export default{
    mounted() {
      let reviews = document.querySelectorAll(".review");
      let currentReviewIndex = 0;
      let reviewAnim = () => {
        reviews.forEach((review) => review.style = "opacity: 0; visibility: hidden; z-index: 1;");
        reviews[currentReviewIndex].style = "opacity: 1; visibility: visible; z-index: 2;";
        currentReviewIndex === reviews.length - 1 ? currentReviewIndex = 0 : currentReviewIndex++;
      }
      setInterval(reviewAnim, 5000);
    },
  }
</script>