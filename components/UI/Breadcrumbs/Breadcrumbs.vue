<template>
  <ol
    vocab="http://schema.org/"
    typeof="BreadcrumbList"
    class="breadcrumbs">
    <li property="itemListElement" typeof="ListItem">
      <nuxt-link property="item" typeof="WebPage" to="/">
        <span property="name">Home</span>
      </nuxt-link>
      <meta property="position" content="1" />
    </li>
    <li
      v-for="(crumb, index) in crumbs"
      :key="index"
      property="itemListElement"
      typeof="ListItem">
      <nuxt-link property="item" typeof="WebPage" :to="crumb.path">
        <span property="name">{{
          $route.fullPath === crumb.path && title !== null ? title : crumb.title
        }}</span>
      </nuxt-link>
      <meta property="position" :content="index + 2" />
    </li>
  </ol>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null
    }
  },
  computed: {
    crumbs() {
      const fullPath = this.$route.fullPath
      const params = fullPath.substring(1).split('/')
      const crumbs = []
      let path = ''
      params.forEach((param, index) => {
        path = `${path}/${param}`
        const match = this.$router.match(path)

        if (match.name !== null) {
          crumbs.push({
            title: (param.replace(/-/g, ' ')),
            ...match
          })
        }
      })
      return crumbs
    }
  }
}
</script>

<style lang="scss" scoped>
.breadcrumbs {
  @apply mr-auto ml-12 flex;

  & > li {
    @apply mr-4 uppercase;
  }
}
</style>