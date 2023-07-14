<script setup>
const toTitleCase = (str) => {
  return str.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  })
}

const route = useRoute()
useHead({
  // route.params.brand → brand/[brand]
  title: `${route.params.name ? toTitleCase(route.params.name) : 'Toy'} in ${toTitleCase(route.params.brand)}`
})

definePageMeta({
  layout: "custom"
})


</script>

<template>
  <div class="mt-32 flex">
    <ToySideBar />

    <!-- pages/brand/[brand]/toy/[[name]].vue -->
    <NuxtPage />
  </div>
</template>

<style>

</style>