<script>
export default {
  props: {
    size: {
      type: String,
      required: false,
      default: 'base'
    }
  },
  render(createElement) {
    return createElement(
      'p',
      {
        class: `text-${this.size}`
      },
      this.$slots.default
    )
  }
}
</script>