<template lang="html">
  <div :class="{ 'expanded': openSearchBar }" class="search">
    <button class="focus:outline-none focus:ring focus:border-blue-300" @click="searchInput">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill-rule="evenodd"
        clip-rule="evenodd"
        viewBox="0 0 34 34"
        class="fill-current w-4 h-auto">
        <defs />
        <path fill="none" d="M-783-93.003H817v1200H-783z" />
        <path d="M20.575 20.951c-4.65 4.274-11.89 4.16-16.4-.346-4.62-4.623-4.62-12.13 0-16.753 4.63-4.623 12.14-4.623 16.76 0 4.5 4.505 4.62 11.748.34 16.392l11.9 11.893a.51.51 0 010 .707.504.504 0 01-.71 0l-11.89-11.893zM4.885 4.56c4.24-4.232 11.11-4.232 15.34 0 4.23 4.233 4.23 11.106 0 15.34-4.23 4.232-11.1 4.232-15.34 0-4.23-4.234-4.23-11.107 0-15.34z" />
      </svg>
    </button>
    <input ref="search" v-model="searchTerm" type="text" class="search-field focus:outline-none focus:ring focus:border-blue-300">
  </div>
</template>

<script>
export default {
  data() {
    return {
      openSearchBar: false,
      searchTerm: ''
    }
  },
  methods: {
    searchInput() {
      if (!this.openSearchBar) {
        this.openSearchBar = true
        this.$refs.search.focus()
      } else if (this.openSearchBar && this.searchTerm) {
        alert('searching now..')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.search {
  @apply relative;
  & button {
    @apply bg-dark-night rounded-full w-8 h-8 relative text-white flex items-center justify-center z-10;
  }
  & input {
    @apply bg-dark-night rounded-full text-white h-8 w-8 absolute top-0 right-0 z-0 transition-all duration-200 ease-in-out;
  }
  &.expanded {
    input {
      @apply w-48 px-4;
    }
  }
}
</style>