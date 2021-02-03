<script>
export default {
  props: {
    level: {
      type: Number,
      required: true
    },
    as: {
      type: String,
      required: false,
      default: null
    },
    font: {
      type: String,
      required: false,
      default: 'futura'
    }
  },
  computed: {
    asClass() {
      return this.as ? this.as : `h${this.level}`
    },
    fontClass() {
      return this.font === 'balboa' ? 'font-balboa' : 'font-futura'
    }
  },
  render(createElement) {
    return createElement(
      'h' + this.level,
      {
        class: `heading ${this.asClass} ${this.fontClass}`
      },
      this.$slots.default
    )
  }
}
</script>

<style lang="scss" scoped>
h1, h2, h3, h4, h5, h6 {}

.h1 {
  @apply text-6xl leading-none;
  @screen lg { @apply leading-tight }
}
.h2 { @apply text-4xl }
.h3 { @apply text-lg }
.h4 {}
.h5 {}
.h6 {}
</style>