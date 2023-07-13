<script setup>
const brand = ref("")
const brandError = ref(false)

// https://nuxt.com/docs/api/utils/navigate-to
const handleSearch = () => {
  if(!brand.value) {
    return brandError.value = true
  }
  navigateTo(`/brand/${brand.value}/toy`, { replace: true })
}
</script>

<template>
  <div
    class="w-[1000px] text-2xl rounded-sm bg-white
    flex justify-between overflow-hidden drop-shadow-2xl mx-auto"
  >
    <input
      type="text"
      class="py-3 px-5 w-10/12 text-2xl rounded-sm focus:outline-none"
      placeholder="ロボットを探す"
      :class="brandError ? 'border-red-500 border-4' : ''"
      v-model="brand"
    />
    <button
      class="bg-gray-950 px-6 text-white w-2/12"
      @click="handleSearch"
    >
      検索
    </button>
  </div>
</template>