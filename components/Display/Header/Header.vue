<template>
  <header class="header dark:bg-dark-night dark:text-white text-dark-night">
    <RouterLink :to="localePath('index')">
      <Logo class="logo" />
    </RouterLink>
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