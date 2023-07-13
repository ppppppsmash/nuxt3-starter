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



</script>

<template>
  <div
    class="mx-auto mt-4 max-w-7xl space-y-4 xs:px-8 sm:px-10 lg:px-16 pb-16 w-3/5"
  >
    <div class="mt-32 flex">

      <ToySideBar />

      <!-- pages/brand/[brand]/toy/[[name]].vue -->
      <NuxtPage />

    </div>
  </div>
</template>

<style>

</style>