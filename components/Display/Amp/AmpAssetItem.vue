<template lang="html">
  <div class="asset-list-item">
    <div class="flex items-center text-sand-bar flex-row">
      <a :href="fileURL" target="_blank" tabindex="0" class="flex flex-grow text-xl focus:text-white">
        {{ title }}
      </a>
      <a href="#" tabindex="0" class="mr-8 hidden md:flex">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
        Download
      </a>
      <CopyOnClick :url="fileURL">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
        {{ $t('copy_link') }}
      </CopyOnClick>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    file: { type: String, required: true }
  },
  computed: {
    fileURL() {
      return `/layout/${this.file}`
    }
  }
}
</script>

<style lang="scss" scoped>
.asset-list-item {
  @apply border-dark-night-100 rounded-md overflow-hidden px-8 py-4 mb-2 transition-all duration-200;
  &:hover {
    @apply shadow-lg;
  }
  a:link,
  button {
    @apply items-center transition-colors duration-200;
  }
  button:hover,
  button:active,
  button:focus,
  a:hover,
  a:focus {
    @apply text-white;
  }
  svg {
    @apply w-4 mr-2;
  }
}
</style>