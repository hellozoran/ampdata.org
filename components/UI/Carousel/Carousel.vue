<template lang="html">
  <div v-swiper:carouselSwiper="swiperOptions" class="carousel">
    <div class="swiper-wrapper">
      <slot />
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import { directive } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

export default {
  directives: {
    swiper: directive
  },
  props: {
    slidesPerView: {
      type: [Number, String],
      required: false,
      default: 4
    }
  },
  data() {
    return {
      swiperOptions: {
        slidesPerView: 'auto',
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.carousel.swiper-container {
  overflow: visible;
}
</style>