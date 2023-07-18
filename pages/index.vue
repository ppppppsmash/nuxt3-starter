<script setup>
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
  import { APIResponse } from '@/types/APIResponse';

  const searchTerm = ref('');

  const url = computed(() => {
    return `api/movies/search?query=${searchTerm.value}`
  });

  const { data } = await useFetch<APIResponse>(url);
</script>

<style lang='scss'>

</style>

<template>
  <div>Hello world</div>
</template>