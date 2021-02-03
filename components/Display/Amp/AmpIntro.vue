<template lang="html">
  <div id="intro" class="amp-intro">
    <img src="5f1-champ.png" class="image mt-auto">
    <AmpTitle title="5F1 Champ" class="mt-auto mb-12" />
  </div>
</template>

<script>
export default {
  mounted() {
    // this.blowUpAmp()
  },
  methods: {
    blowUpAmp() {
      const gsap = this.$gsap
      const ScrollTrigger = this.$ScrollTrigger
      gsap.registerPlugin(ScrollTrigger)
      gsap.to('.image', {
        scrollTrigger: {
          trigger: '.image',
          scrub: true,
          start: '70% center',
          end: 'bottom 100px'
        },
        x: 1000,
        duration: 1
      })
      ScrollTrigger.create({
        trigger: '.amp-intro',
        start: 'top top',
        end: '+=100%',
        pin: true
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.amp-intro {
  @apply flex flex-col items-center justify-center relative bg-sunshine w-full min-h-screen overflow-hidden text-center pt-12 px-8;
  .image {
    max-height: 56vh;
    width: auto;
  }
}
</style>