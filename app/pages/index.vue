<script setup lang="ts">
const { data } = await useFetch("https://hp-api.onrender.com/api/characters");
// console.log(data);
</script>

<template>
  <div class="flex flex-row">
    <VideoCard
      v-for="(item, index) in data"
      :key="index"
      :name="item.name"
      :house="item.house"
      :ancestry="item.ancestry"
      :wand="item.wand.core"
      :image="item.image"
    />
  </div>
</template>

<style></style>
