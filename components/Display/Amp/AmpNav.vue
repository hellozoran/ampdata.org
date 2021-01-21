<template lang="html">
  <div class="amp-nav hidden lg:block">
    <AmpNavItem
      v-for="(nav, i) in navList"
      :key="nav.link"
      :index="i + 1"
      :link="nav.link"
      :title="nav.title" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        { title: 'Intro', link: 'intro' },
        { title: 'History', link: 'story' },
        { title: 'Schematics', link: 'schematics' },
        { title: 'Layouts', link: 'layouts' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.amp-nav {
  @apply fixed z-50;
  top: 50%;
  left: 2rem;
  transform: translateY(-50%);
}
</style>