<template>
  <div class="home">
    <AmpNav />
    <AmpIntro />
    <AmpStory />
    <AmpSchematic />
    <AmpLayouts />
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
        description: 'Sample meta description',
        sharecard: 'https://sharecard.com/image.jpg',
        url: this.$route.path
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  @apply flex items-center justify-center flex-col text-center min-h-screen relative;
}
</style>