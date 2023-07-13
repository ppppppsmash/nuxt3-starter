<script setup>
const brand = ref("")
const router = useRouter()

const handleSearch = () => {
  router.push(`/brand/${brand.value}/toy`)
}
</script>

<template>
  <div
    class="w-[1000px] text-2xl rounded-sm bg-white
    flex justify-between overflow-hidden drop-shadow-2xl mx-auto"
  >
    <input
      type="text"
      class="py-3 px-5 w-10/12 text-2xl rounded-full focus:outline-none"
      placeholder="ロボットを探す"
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