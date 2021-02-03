<template lang="html">
  <div class="amp-title">
    <Paragraph size="xs" class="font-bold uppercase tracking-wider">
      The legendary
    </Paragraph>
    <Heading :level="1" font="balboa" class="text-white mx-8">
      {{ title }}
    </Heading>
    <Paragraph class="font-bold uppercase tracking-wider text-lg mb-1">
      Schematic & Layout
    </Paragraph>
    <Paragraph size="xs" class="font-bold uppercase tracking-wider">
      From AmpData.org
    </Paragraph>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.amp-title {
  @apply flex justify-center flex-col;
}
</style>