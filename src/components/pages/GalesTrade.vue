<!-- <script setup>
import {onMounted} from "vue";
    let carouselIndicators, carouselItems, carouselInner;
    let currentIndex = 0;
    onMounted(() => {
        carouselIndicators = document.querySelectorAll(".carousel-indicators li");
        carouselItems = document.querySelectorAll(".carousel-item");
        carouselInner = document.querySelector(".carousel-inner")
        for (let i = 0; i < carouselItems.length; i++) {
            carouselItems[i].style.left = `${i * window.innerWidth}px`;
        }
        carouselIndicators[currentIndex].style.backgroundColor = "#f93";

    });
    let slideTimer;
    let slideCarousel = (index) => {
        clearInterval(slideTimer);
        currentIndex = index ? index - 1 : currentIndex;
        if (currentIndex == carouselItems.length) currentIndex = 0;
        carouselInner.scroll(window.innerWidth * currentIndex, 0);
        console.log(currentIndex)
        for (let i = 0; i < carouselIndicators.length; i++) {
            carouselIndicators[i].style.backgroundColor = "#595959";
        }
        carouselIndicators[currentIndex].style.backgroundColor = "#f93";
        currentIndex++;
        slideTimer = setInterval(slideCarousel, 5000);
    }
    
    slideTimer = setInterval(slideCarousel, 5000);
    
</script>
<template>
    <main>
        <section>
            <div id="demo" class="carousel slide relative pointer-event" data-ride="carousel">
                
                <div class="carousel-inner scroll-smooth relative overflow-hidden pb-[40%]">
                  <div class="carousel-item absolute w-full ">
                    <img src="images/jumbo-images/img1.png" height="600px" class="max-w-full h-auto img-responsive">
                    <div class="carousel-caption absolute left-20 top-1/2 translate-y-[-50%] w-[90%] sm:w-3/4 md:w-1/2 text-left font-bold">
                      <h2 class="font-[32px] font-extrabold ">Galestrade</h2>
                      <h4 class="font-[1.5rem]">Welcome to Galestrade the best, and smartest trading platform in the UK.</h4>
                      <span class="navbar-btn bg-[#f93] rounded-sm text-[#fff] ">
                        <a class="btn btn-red call-to-action" href="register.php">START IN ONE
                          CLICK</a>
                      </span>        </div>
                  </div>
                  <div class="carousel-item absolute w-full">
                    <img src="images/jumbo-images/img2.png" height="600px" class="max-w-full h-auto img-responsive">
                    <div class="carousel-caption absolute left-20 top-1/2 translate-y-[-50%] w-[90%] sm:w-3/4 md:w-1/2 text-left font-bold">
                      <h2 class="font-[32px] font-extrabold ">GLOBAL TRADING ASSETS</h2>
                      <h4 class="font-[1.5rem]">Get access to trade with over 100 global trading assets.</h4>
                    </div>
                  </div>
                  <div class="carousel-item absolute w-full  ">
                    <img src="images/jumbo-images/img3.png" height="600px" class="max-w-full h-auto img-responsive carol">
                    <div class="carousel-caption absolute left-20 top-1/2 translate-y-[-50%] w-[90%] sm:w-3/4 md:w-1/2 text-left font-bold">
                      <h2 class="font-[32px] font-extrabold ">START INVESTING TODAY</h2>
                      <h4>The right place for online investments on financial markets.</h4>
                    </div>
                  </div>
                  <div class="carousel-item absolute w-full  ">
                    <img src="images/jumbo-images/img4.png" height="600px" class="max-w-full h-auto img-responsive">
                    <div class="carousel-caption absolute left-20 top-1/2 translateY-[-50%] text-left font-bold">
                      <h2 class="font-[32px] font-extrabold ">SEEMLESS WITHDRAW</h2>
                      <h4>Make withdrawals in the shortest possible time.</h4>
                    </div>
                  </div>
                  <div class="carousel-item absolute w-full  ">
                    <img src="images/jumbo-images/img5.png" height="600px" class="max-w-full h-auto img-responsive">
                    <div class="carousel-caption absolute left-20 top-1/2 translate-y-[-50%] w-[90%] sm:w-3/4 md:w-1/2 text-left font-bold">
                      <h2 class="font-[32px] font-extrabold ">EXCELLENT SERVICES</h2>
                      <h4>We offer the best investment plans to minimised costs, and maximise profits.</h4>
                    </div>
                  </div>
                  <div class="carousel-item absolute w-full">
                    <img src="images/jumbo-images/img6.png" height="600px" class="max-w-full h-auto img-responsive">
                    <div class="carousel-caption absolute left-20 top-1/2 translate-y-[-50%] w-[90%] sm:w-3/4 md:w-1/2 text-left font-bold">
                      <h2 class="font-[32px] font-extrabold ">DRIVEN BY PASSION</h2>
                      <h4>Our team of traders and investors are Innovative, and guided by values for years</h4>
                    </div>
                  </div>
            
                </div>
                <ul class="carousel-indicators absolute bottom-20 w-full flex justify-center">
                    <li @click="slideCarousel(1)" class="h-[3px] w-[30px] mr-2 border-t-[10px solid transparent] bg-[#595959] cursor-pointer"></li>
                    <li @click="slideCarousel(2)" class="h-[3px] w-[30px] mr-2 border-t-[10px solid transparent] bg-[#595959] cursor-pointer"></li>
                    <li @click="slideCarousel(3)" class="h-[3px] w-[30px] mr-2 border-t-[10px solid transparent] bg-[#595959] cursor-pointer"></li>
                    <li @click="slideCarousel(4)" class="h-[3px] w-[30px] mr-2 border-t-[10px solid transparent] bg-[#595959] cursor-pointer"></li>
                    <li @click="slideCarousel(5)" class="h-[3px] w-[30px] mr-2 border-t-[10px solid transparent] bg-[#595959] cursor-pointer"></li>
                    <li @click="slideCarousel(6)" class="h-[3px] w-[30px] mr-2 border-t-[10px solid transparent]  bg-[#595959] cursor-pointer"></li>
                  </ul>
              </div>
        </section>
        <section class="bg-[#e6e6e6] font-[#000] pb-[19px] pt-[16px]">
            <h3 class="font-[1.5rem]"><em>As featured in:</em></h3>
            <ul class="flex justify-between align-middle flex-row">
                <li class="px-[15px]"><img src="images/featured1.png" /></li>
                <li class="px-[15px]"><img src="images/featured2.png" /></li>
                <li class="px-[15px]"><img src="images/featured3.png" /></li>
                <li class="px-[15px]"><img src="images/featured4.png" /></li>
                <li class="px-[15px]"><img src="images/featured5.png" /></li>
                <li class="px-[15px]"><img src="images/featured6.png" /></li>
            </ul>
        </section>
    </main>
</template>

<style>
main{
    font-family: "Segoe UI",Helvetica,sans-serif !important;
    color: #fff !important;
    letter-spacing: 1 !important;

}
</style> -->