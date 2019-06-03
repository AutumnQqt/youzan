<template>
  <!-- <div class="js-image-swiper cust om-image-swiper custom-image-swiper-single" data-images="1"> -->
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swp-page swiper-slide" v-for="bannerlist in bannerlists">
        <a class="js-no-follow" :href="bannerlist.clickUrl">
          <img class="goods-main-photo fadeIn" :src="bannerlist.img">
        </a>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
  <!-- </div> -->
</template>

<script>
import "swiper/dist/css/swiper.min.css";
import Swiper from "swiper";
export default {
  name: "Swip",
  props: ["bannerlists"],
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });
  }
};
</script>

<style scoped>
img {
  width: 100%;
  height: 100%;
}
</style>
