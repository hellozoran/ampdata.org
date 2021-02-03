<template lang="html">
  <footer class="footer bg-dark-night-100 text-xs text-sand-bar">
    <!-- <LanguageSwitcher /> -->
    <Container>
      &copy; {{ currentYear }}. {{ $t('copyright_text') }}
    </Container>
  </footer>
</template>

<script>
export default {
  computed: {
    currentYear() {
      return new Date().getFullYear()
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  @apply py-8 px-4 text-center;
}
</style>