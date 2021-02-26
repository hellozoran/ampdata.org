<template lang="html">
  <div class="relative overflow-hidden px-4 -mx-4">
    <div class="flex mx-4 items-center">
      <header class="flex-grow">
        <slot name="header" />
      </header>
      <div class="actions flex-shrink-0">
        <slot name="actions" />
      </div>
    </div>
    <div class="carousel relative space-x-2 flex flex-no-wrap overflow-x-scroll px-4">
      <slot />
    </div>
    <div :class="`absolute top-0 bottom-0 left-0 ml-4 pl-4 w-2 bg-gradient-to-r from-${bgColor}`" />
    <div :class="`absolute top-0 bottom-0 right-0 mr-4 pr-4 w-2 bg-gradient-to-l from-${bgColor}`" />
  </div>
</template>

<script>
export default {
  props: {
    bgColor: {
      type: String,
      required: false,
      default: 'sunshine'
    }
  }
}
</script>

<style lang="scss" scoped>
.carousel {
  &::-webkit-scrollbar {
    @apply hidden;
  }
}
</style>