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
  @apply bg-sunshine text-gray-800;
}
.dark-mode {
  @apply bg-gray-800 text-white;
}
</style>