<template lang="html">
  <a
    :class="{ 'active': active }"
    class="amp-nav-item cursor-pointer"
    @click="smoothScrollToSection(link)">
    <span>{{ itemNumber }}</span>
    <div>{{ title }}</div>
  </a>
</template>

<script>
export default {
  props: {
    index: { type: Number, required: true },
    title: { type: String, required: true },
    link: { type: String, required: true }
  },
  data() {
    return {
      active: false
    }
  },
  computed: {
    itemNumber() {
      return this.index < 10 ? `0${this.index}` : this.index
    }
  },
  mounted() {
    document.addEventListener('scroll', () => {
      this.active = this.isInViewport()
    }, { passive: true })
  },
  beforeDestroy() {
    document.removeEventListener('scroll', () => {
      this.active = this.isInViewport()
    })
  },
  methods: {
    smoothScrollToSection(section) {
      const gsap = this.$gsap
      const ScrollToPlugin = this.$ScrollToPlugin
      gsap.registerPlugin(ScrollToPlugin)
      gsap.to(window, {
        duration: 0.69,
        scrollTo: `#${section}`,
        onComplete: () => { location.hash = section }
      })
    },
    isInViewport() {
      const el = document.querySelector(`#${this.link}`)
      const rect = el.getBoundingClientRect()
      return (
        rect.top <= (window.innerHeight / 2 || document.documentElement.clientHeight / 2) &&
        rect.bottom >= (window.innerHeight / 2 || document.documentElement.clientHeight / 2)
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.amp-nav-item {
  @apply flex items-center font-bold uppercase tracking-wider text-sand-bar transition-colors duration-200;
  & span {
    @apply font-balboa text-3xl mr-2;
  }
  &.active {
    @apply text-white;
  }
  &:hover {
    @apply text-white;
  }
}
</style>