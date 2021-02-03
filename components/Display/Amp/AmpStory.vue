<template lang="html">
  <div id="story" class="amp-story p-12 lg:p-4">
    <div class="w-full lg:w-1/2 md:grid grid-cols-3 gap-8 mx-auto">
      <div class="title text-right mb-8 md:mb-0">
        <Heading :level="2" as="h3" class="uppercase font-bold mr-1 tracking-widest">
          The birth of
        </Heading>
        <Heading :level="2" as="h1" font="balboa" class="uppercase text-sunshine">
          a legend
        </Heading>
      </div>
      <div class="col-span-2 text text-left">
        <Paragraph class="mb-4">
          The Champ storied history began in 1948 as a 4-watt amp with a single 8-inch speaker in the form of the original Champion 800. It was soon replaced by the even-smaller Champion 600 a year later. While both of these early versions were tweed, the Champ was overhauled in 1964 in the “blackface” style with a black Tolex covering.
        </Paragraph>
        <Paragraph class="mb-4">
          As with the rest of Fender’s amp lineup, the Champ and Vibro Champ were outfitted with the “silverface” look in 1968, and that existed until 1982, a year thtat birthed the Champ II with 18 watts of power, a 10-inch speaker and newly designed circuitry.
        </Paragraph>
        <Paragraph>
          Over the years, the Champ has gone through several other iterations, from tube to solid-state, from tweed to Tolex, but it consistently remained a key piece of gear for casual players and professional artists alike.
        </Paragraph>
      </div>
    </div>
    <div class="w-full lg:w-1/2 mt-24 mx-auto text-left">
    <figure class="chassis">
      <img src="5f1-1956-chassis.jpg" class="w-full">
      <figcaption class="text-sand-bar">
        1956 Fender 5F1 Champ chassis.
      </figcaption>
    </figure>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.imageSlide()
  },
  methods: {
    imageSlide() {
      const gsap = this.$gsap
      const ScrollTrigger = this.$ScrollTrigger
      gsap.registerPlugin(ScrollTrigger)
      gsap.from('.title', {
        scrollTrigger: {
          trigger: '.title',
          scrub: true,
          start: 'center 90%',
          end: '+=300'
        },
        opacity: 0,
        x: 100,
        duration: 1
      })
      gsap.from('.text', {
        scrollTrigger: {
          trigger: '.text',
          scrub: true,
          start: 'center 100%',
          end: '+=300'
        },
        opacity: 0,
        x: -50,
        duration: 1
      })
      gsap.from('.chassis', {
        scrollTrigger: {
          trigger: '.chassis',
          scrub: true,
          start: 'center 120%',
          end: '+=300'
        },
        opacity: 0,
        y: 50,
        duration: 1
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.amp-story {
  @apply bg-dark-night-900 min-h-screen w-full text-white py-32;
}
</style>