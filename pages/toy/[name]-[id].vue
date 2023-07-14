<script setup>
const toTitleCase = (str) => {
  return str.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  })
}

const route = useRoute()
useHead({
  // route.params.brand → brand/[brand]
  title: toTitleCase(route.params.name)
})
</script>

<template>

  <div
    class="mx-auto mt-4 max-w-7xl space-y-4 px-4 xs:px-8 sm:px-10 lg:px-16 pb-16 w-3/5"
  >

    <ToyDetailHero />

    <ToyDetailAttributes />

    <ToyDetailDescrisption />

    <ToyDetailContact />

  </div>

</template>

<style>

</style>