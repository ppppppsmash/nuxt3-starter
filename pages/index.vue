<script setup lang="ts">
  useHead({
    title: 'トップページ',
    meta: [
      { name: 'description', content: 'nuxt3.0ページ' }
    ],
    bodyAttrs: {
      class: 'test'
    },
    script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
  })
</script>

<style lang="scss">

</style>

<template>
  <div>
    <h1 class="test">トップページ</h1>
  </div>
</template>