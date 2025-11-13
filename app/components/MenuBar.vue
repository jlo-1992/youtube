<script setup lang="ts">
const btnDetails = [
  {
    to: "/",
    icon: "mdi-home",
    name: "所有人物",
  },
  {
    to: "/shorts",
    icon: "mdi-compass",
    name: "短影音",
  },
  {
    to: "/movies",
    icon: "mdi-bell-outline",
    name: "電影",
  },
  {
    to: "/subscibe",
    icon: "mdi-bell-outline",
    name: "訂閱內容",
  },
];
</script>

<template>
  <div class="flex w-75 flex-col gap-4 p-5">
    <MenuBtn v-for="btn in btnDetails" :key="btn.name" :to-page="btn.to" :icon-name="btn.icon" :btn-name="btn.name" />
  </div>
</template>

<style scoped></style>
