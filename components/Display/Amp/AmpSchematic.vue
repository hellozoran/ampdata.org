<template lang="html">
  <div id="schematics" class="amp-schem panel">
    <Heading :level="2" font="balboa" class="mb-16">
      Fender 5F1 Schematics
    </Heading>
    <div class="mb-16 w-full mx-4 md:w-1/2 md:mx-auto">
      <AmpAssetItem
        v-for="schematic in schematics"
        :key="schematic.file"
        :title="schematic.title"
        :file="schematic.file"
        class="bg-dark-night" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      schematics: [
        { title: 'Original Fender schematic', file: 'fender-5f1-champ-layout-original.pdf' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.amp-schem {
  @apply bg-dark-night-100 min-h-screen text-white w-full flex items-center justify-center flex-col relative z-30;
}
</style>