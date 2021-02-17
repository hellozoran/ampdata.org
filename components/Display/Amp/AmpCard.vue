<template lang="html">
  <div class="amp-card">
    <div class="amp-card-img h-64 mb-8">
      <img src="/5f1-champ.png" class="w-64 mx-auto z-10 relative">
    </div>
    <div class="circle-wrapper">
      <div class="circle" />
    </div>
    <div class="px-5 relative z-10">
      <Heading :level="3">
        {{ title }}
      </Heading>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: Object,
      required: false,
      default: () => {}
    },
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.amp-card {
  @apply rounded-md overflow-hidden relative py-8 text-center transition-colors duration-300;
  .circle-wrapper {
    @apply absolute inset-0 flex items-center justify-center;
  }
  .circle {
    @apply rounded-full bg-dark-night block absolute w-4 h-4 transition-transform duration-300 z-0 ease-out;
  }
  &:hover {
    @apply text-white;
  }
  &:hover .circle {
    transform: scale(40);
  }
}
</style>