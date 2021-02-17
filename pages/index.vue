<template lang="html">
  <div class="home">
    <div class="px-8 md:px-12 lg:px-16">
      <Heading :level="2">
        Fender
      </Heading>
      <Carousel slidesPerView="auto">
        <div v-for="banner in 12" :key="banner" class="swiper-slide" style="width: 22%;">
          <nuxt-link :to="localePath('/fender/')">
            <AmpCard title="5F1 Champ" />
          </nuxt-link>
        </div>
      </Carousel>
      <Heading :level="2">
        Marshall
      </Heading>
      <Carousel slidesPerView="auto">
        <div v-for="banner in 12" :key="banner" class="swiper-slide" style="width: 22%;">
          <nuxt-link :to="localePath('/fender/')">
            <AmpCard title="5F1 Champ" />
          </nuxt-link>
        </div>
      </Carousel>
    </div>
  </div>
</template>

<script>
import pageMetadata from '~/mixins/pageMetadata'

export default {
  mixins: [pageMetadata],
  data() {
    return {
      meta: {
        title: 'AmpData',
        description: 'An ever growing resource of guitar amp data, schematics, layouts and more',
        sharecard: 'https://sharecard.com/image.jpg',
        url: this.$route.path
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  @apply bg-sunshine w-full min-h-screen pt-32;
}
</style>