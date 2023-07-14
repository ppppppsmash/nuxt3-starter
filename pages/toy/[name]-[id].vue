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

definePageMeta({
  layout: "custom",
})
</script>

<template>
  <div>
    <ToyDetailHero />

    <ToyDetailAttributes />

    <ToyDetailDescrisption />

    <ToyDetailContact />
  </div>
</template>

<style>

</style>