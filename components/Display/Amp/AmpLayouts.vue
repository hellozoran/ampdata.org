<template lang="html">
  <div id="layouts" class="amp-layouts panel">
    <Heading :level="2" font="balboa" class="mb-16">
      Fender 5F1 layouts
    </Heading>
    <div class="mb-16 w-full mx-4 md:w-1/2 md:mx-auto">
      <AmpAssetItem
        v-for="layout in layouts"
        :key="layout.file"
        :title="layout.title"
        :file="layout.file"
        class="bg-dark-night-100 layout-item" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      layouts: [
        { title: 'Original Fender layout', file: 'fender-5f1-champ-layout-original.pdf' }
      ]
    }
  },
  mounted() {
    this.itemReveal()
  },
  methods: {
    itemReveal() {
      const gsap = this.$gsap
      const ScrollTrigger = this.$ScrollTrigger
      gsap.registerPlugin(ScrollTrigger)
      gsap.from('.layout-item', {
        scrollTrigger: {
          trigger: '.layout-item',
          scrub: true,
          start: 'center 100%',
          end: '+=100'
        },
        opacity: 0,
        y: 50,
        duration: 0.25
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.amp-layouts {
  @apply bg-dark-night min-h-screen text-white w-full flex items-center justify-center flex-col relative z-30 p-4;
}
</style>