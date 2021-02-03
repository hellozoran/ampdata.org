<template lang="html">
  <div class="amp-card">
    <div class="amp-card-img h-64 bg-dark-night-900" />
    <div class="px-5 text-left">
      <Heading :level="3">
        {{ title }}
      </Heading>
    </div>
    <div class="px-4 pt-2 pb-4 flex items-center text-sand-bar">
      <a href="#" class="mr-8">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
        Download
      </a>
      <a href="#">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
        Copy URL
      </a>
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
  @apply rounded-md shadow-lg bg-dark-night-900 overflow-hidden;
  a:link {
    @apply flex items-center transition-colors duration-200;
  }
  a:hover,
  a:focus {
    @apply text-white;
  }
  svg {
    @apply w-4 mr-2;
  }
}
</style>