<script setup>

</script>

<template>

  <div
    class="mx-auto mt-4 max-w-7xl space-y-4 px-4 xs:px-8 sm:px-10 lg:px-16 pb-16 w-3/5"
  >

    <ToyDetailHero />

    <ToyDetailAttributes />

    <ToyDetailDescrisption />

    <!-- TOY CONTACT -->
    <div class="mt-10">
      <div class="flex w-[600px] justify-between">
        <input type="text" class="border p-1" placeholder="Name" />
        <input type="text" class="border p-1" placeholder="Email" />
        <input type="text" class="border p-1" placeholder="Phone" />
      </div>
      <div class="flex mt-4 w-[600px]">
        <textarea class="border p-1 w-full" placeholder="Message"></textarea>
      </div>
      <button class="bg-gray-950 text-white px-10 py-3 rounded mt-4">
        送信
      </button>
    </div>
    <!-- TOY CONTACT -->
  </div>
  <!-- TOY DETAIL PAGE   -->

</template>

<style>

</style>