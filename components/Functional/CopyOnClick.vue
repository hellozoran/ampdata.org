<template lang="html">
  <button type="button" class="outline-none focus:text-white border-0 focus:outline-none flex items-center" tabindex="0" @click="copyURL">
    <transition-group name="copy" tag="div" class="relative w-24 h-6">
      <div v-if="!copied" key="copySlot" class="flex items-center absolute h-6">
        <slot />
      </div>
      <div v-else key="copiedText" class="copied absolute">
        {{ $t('copied') }}
      </div>
    </transition-group>
  </button>
</template>

<script>
export default {
  props: {
    url: { type: String, required: true }
  },
  data() {
    return {
      copied: false
    }
  },
  methods: {
    copyURL(e) {
      const copiedUrl = `https://ampdata.org/${this.url}`
      if (!navigator.clipboard) {
        return
      }
      navigator.clipboard.writeText(copiedUrl)
      this.copied = true
      setTimeout(() => { this.copied = false }, 2000)
    }
  }
}
</script>

<style lang="css" scoped>
.copy-enter-active,
.copy-leave-active {
  transition: opacity 250ms;
}
.copy-enter,
.copy-leave-to {
  opacity: 0;
}
</style>