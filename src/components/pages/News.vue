<script setup>
import { onMounted } from "vue";
import JumbotronWrapper from "../../components/JumbotronWrapper.vue";
import NewsArticle from "../../components/NewsArticle.vue";

let carouselIndicators, carouselSlide, carouselIndicatorsCnt;
let index = 0;

onMounted(() => {
  carouselIndicators = document.querySelectorAll(".carousel-img");
  carouselIndicatorsCnt = document.querySelector(".carousel-indicators");
  carouselSlide = document.querySelector(".carousel-slide");
  carouselSlide.style.backgroundImage = `url(${carouselIndicators[index].src})`;
  carouselIndicators[index].style.filter = "unset";
});
let slideTimer;
let slideCarousel = (n) => {
  clearInterval(slideTimer);
  index = n ? n - 1 : index;
  if (index === carouselIndicators.length) index = 0;
  carouselSlide.style.backgroundImage = `url(${carouselIndicators[index].src})`;
  for (let i = 0; i < carouselIndicators.length; i++) {
    carouselIndicators[i].style.filter = "contrast(.5)";
  }
  carouselIndicators[index].style.filter = "unset";
  carouselIndicatorsCnt.scroll(index * (carouselIndicators[index].offsetWidth - 20), 0);
  index++;
  slideTimer = setInterval(slideCarousel, 5000);
};

slideTimer = setInterval(slideCarousel, 5000);
</script>
<template>
   <div class="bg-[#2e2e2e]">
    <jumbotron-wrapper title="news" bg="newsbg" />
    <main
      class="max-w-[1700px] mx-auto py-12 px-4 sm:px-12 md:px-16 lg:px-20 xl:px-[100px] 2xl:px-0"
    >
      <section class="tracking-[.02em]">
        <news-article title="pandemic plates" date="may 22, 2020">
          <template #content>
            <p class="my-4">
              For anyone who is reading this, we hope that you are safe and
              healthy in these strange times.
            </p>
            <p class="my-4">
              As we navigate through what the new industry will look like and
              how it will operate, we’ve been proactive in our own right by
              updating the Driving Plates library. We’ve captured footage with
              little to no cars or pedestrians, in some of the most sought after
              cities in our country. Not only can these be used for stories that
              will reflect these times, but they can also be used for period
              pieces since there are less modern day elements to erase in post.
              We’ve capture DTLA, New York, and Las Vegas, and it’s certainly
              captivating and haunting to see LAX empty during rush hour.
            </p>
            <div class="my-8">
              <div class="iframe-container">
                <iframe
                  src="https://player.vimeo.com/video/421639222?app_id=122963&wmode=opaque"
                  width="640"
                  height="360"
                  frameborder="0"
                  title="DrivingPlates Clip Set Preview"
                  allow="autoplay; fullscreen"
                  allowfullscreen=""
                  style="opacity: 1; background-size: 100%; background-image: url(https://i.vimeocdn.com/video/897359724-193ef2f0249d9d6abc8f2eb0c11e834260454adc6d25a9571b5452e4183bf27d-d?mw=1200&mh=676)"
                  class="responsive-iframe bg-no-repeat"
                ></iframe>
              </div>
            </div>
            <p class="my-4">
              In addition to LAX, we’ve also captured Hollywood Blvd., Sunset
              Blvd., and some of our largest freeways; the day time versions are
              already available on our website, and the night time Los Angeles
              footage should be available within the week. Las Vegas and New
              York are still processing, and should be available within the
              month. Keep an eye out, and shoot us an email if you have any
              questions.
            </p>
            <p class="my-4">
              Be safe, everyone, we look forward to working with you all again
              soon.
            </p>
          </template>
        </news-article>
        <news-article
          title="now over 7000 library options"
          date="august 15, 2018"
        >
          <template #content>
            <p class="my-4">
              With new footage from Mexico City recently uploaded, we're proud
              to announce that there are now over 7000 sets of driving footage
              from around the world available on our site! It's very humbling to
              see our passion project grow from around 2000 sets barely two
              years ago, to a library filled with 4K and HD footage from over 20
              countries and nearly a hundred cities.
            </p>
            <p class="my-4">
              We could never have done this alone, and are eternally grateful to
              the TV shows, feature films, VFX houses, and filmmakers across the
              world who have entrusted our company with their driving plates
              needs. We have truly enjoyed working with you all, and have
              happily watched how great the footage has worked in your shows.
              Thank you, thank you, thank you!
            </p>
            <p class="my-4">
              We also wanted to send a shout out to our tireless
              cinematographers who shoot our library and integrate with
              productions to shoot custom plates: you have all been an integral
              part of our success and we look forward to shooting more with you!
            </p>
            <p class="my-4">
              We're still editing Driving Plates footage, so look for this
              number to grow! Thanks to everyone who has been a part of our
              team; we look forward to what the future brings!
            </p>
          </template>
        </news-article>
        <news-article title="tag....you're it!" date="may 29, 2018">
          <template #content>
            <p class="my-4">
              What was once childhood's most treasured game has now been made
              into a major motion picture, and we couldn't be more excited to
              say that you'll see some of Driving Plates featured in the film!
            </p>
            <p class="my-4">
              Come June 15th, 2018, "TAG" will fill theaters with laughter,
              nostalgia and, we dare say, some great driving shots. Check out
              the trailer below; you might even catch a glimpse of our footage!
            </p>
            <div class="my-8">
              <div class="iframe-container overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/kjC1zmZo30U?wmode=opaque&enablejsapi=1"
                  width="640"
                  height="360"
                  frameborder="0"
                  title="DrivingPlates Clip Set Preview"
                  allow="autoplay; fullscreen"
                  allowfullscreen=""
                  style="
                    opacity: 1;
                    background-size: 100%;
                    background-position: 0 -35px;
                  "
                  class="responsive-iframe bg-[url('https://i.ytimg.com/vi_webp/kjC1zmZo30U/sddefault.webp')] bg-no-repeat"
                ></iframe>
              </div>
            </div>
          </template>
        </news-article>
        <news-article title="driving from the past" date="april 17, 2018">
          <template #content>
            <p class="my-4">
              Recently wrapped shooting a production where we were able to
              integrate with picture vehicles from the 1970s. Driving through
              Beverly Hills and Burbank with an entourage of period cars? Quite
              a sight to behold!
            </p>
            <div class="my-8">
              <div class="carousel-container overflow-hidden">
                <div
                  class="carousel-slide aspect-[750/563] mb-3 animation-[fade] transition-[background-image] duration-[1s] ease-in-out"
                  style="background-size: 100%"
                ></div>
                <div
                  class="carousel-indicators scroll-smooth relative h-[6rem] max-w-[28rem] mx-auto overflow-hidden"
                >
                  <img
                    v-for="n in 4"
                    :key="n"
                    :src="`/newsImg/carousel${n}.jpg`"
                    :alt="`carousel${n}`"
                    :style="`left: ${(n - 1) * 7}rem`"
                    :data-index="n"
                    @click="slideCarousel(n)"
                    class="carousel-img absolute w-[7rem] block cursor-pointer contrast-50"
                  />
                </div>
              </div>
            </div>
            <p class="my-4">
              We've upped our game and are now able to recreate "period
              environment" for driving scenes. Simply having a handful of period
              cars surrounding our driving plates vehicles transforms the
              background into a believable era. Watch the website: these clip
              sets will be for sale soon!
            </p>
          </template>
        </news-article>
        <news-article title="the commuter" date="january 22, 2018">
          <template #content>
            <p class="my-4">
              Trains. Conspiracies. Liam Neeson. What more could you ask for in
              an action packed thriller? The Driving Plates team was on the
              ground, helping to capture some amazing plates that the VFX
              artists used to really help drive the story. Pun intended.
            </p>
            <figure class="my-8 max-w-[1024px] aspect-[1] mx-auto">
              <img
                src="/newsImg/commuter.jpg"
                alt="the commuter img"
                srcset="/newsImg/commuter.jpg"
              />
              <figcaption class="text-[12px] leading-[1.68rem]">
                One of our operators, Drew Suppa, demonstrates the stability of
                our rig used to shoot plates for THE COMMUTER.
              </figcaption>
            </figure>
            <p class="my-4">
              This is not our traditional Driving Plates rig, but we engineered
              it to aide in recreating the feel of a moving train. Watch the
              movie, and you'll agree: it did an amazing job!
            </p>
            <p class="my-4">
              THE COMMUTER is in theaters now, so get your tickets and be ready
              for non-stop, nail biting action!
            </p>
            <div class="my-8 pb-[56.2061%] relative">
              <iframe
                src="https://www.youtube.com/embed/WWexI9YiLSc?wmode=opaque&amp;enablejsapi=1"
                height="480"
                width="854"
                scrolling="no"
                frameborder="0"
                allowfullscreen=""
                class="w-full h-full absolute top-0 left-0"
                ></iframe>
            </div>
          </template>
        </news-article>
        <p class="text-center uppercase text-[12px]"><a href="#">older</a></p>
      </section>
    </main>
  </div>
</template>


<style>



</style>