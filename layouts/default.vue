<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<style>
html {
  transition: all 150ms ease;
}
body {
  @apply bg-sunshine;
}
.light-mode {
  @apply text-gray-800;
}
.dark-mode {
  @apply text-white;
}
.page {
  @apply min-h-screen mt-24;
}
</style>