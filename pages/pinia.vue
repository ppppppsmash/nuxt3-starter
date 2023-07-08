<script setup lang="ts">
import { useCounterStore } from "@/store/counter";
import { storeToRefs } from "pinia";
const counterStore = useCounterStore();
const { increment } = counterStore;
const { count } = storeToRefs(counterStore);
</script>

<template>
  <div>
    <h1>Count: {{ count }}</h1>
    <button @click="increment">プラス</button>
    <br />
    <!-- <nuxt-link to="/">もどる</nuxt-link> -->
  </div>
</template>