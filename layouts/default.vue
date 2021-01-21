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
  background-color: white;
}
.light-mode {
  @apply bg-white text-gray-800;
}
.dark-mode {
  @apply bg-gray-800 text-white;
}
</style>