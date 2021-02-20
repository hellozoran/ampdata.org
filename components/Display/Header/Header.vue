<template>
  <header class="header dark:text-white text-dark-night">
    <RouterLink :to="localePath('index')" tabindex="0">
      <Logo class="logo" />
    </RouterLink>
    <Breadcrumbs />
    <Search />
  </header>
</template>

<style lang="scss" scoped>
.header {
  @apply
    py-6
    px-8
    flex
    items-center
    justify-between
    w-full
    top-0
    left-0
    z-50
    absolute;
}
.logo {
  @apply h-5;
}
</style>