<template>
  <div class="page pt-24">
    <Container>
      <Carousel>
        <template v-slot:header>
          <Heading :level="2" class="text-dark-night">
            Fender
          </Heading>
        </template>
        <div class="w-64 h-64 flex flex-shrink-0 bg-gray-800">
          item 1
        </div>
        <div class="w-64 h-64 flex flex-shrink-0 bg-gray-800">
          item 1
        </div>
        <div class="w-64 h-64 flex flex-shrink-0 bg-gray-800">
          item 1
        </div>
        <div class="w-64 h-64 flex flex-shrink-0 bg-gray-800">
          item 1
        </div>
        <div class="w-64 h-64 flex flex-shrink-0 bg-gray-800">
          item 1
        </div>
        <div class="w-64 h-64 flex flex-shrink-0 bg-gray-800">
          item 1
        </div>
        <div class="w-64 h-64 flex flex-shrink-0 bg-gray-800">
          item 1
        </div>
      </Carousel>
    </Container>
  </div>
</template>

<script>
import pageMetadata from '~/mixins/pageMetadata'

export default {
  mixins: [pageMetadata],
  computed: {
    meta() {
      return {
        title: 'Schematics, layouts and more',
        description: '',
        url: '',
        sharecard: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.page {}
</style>