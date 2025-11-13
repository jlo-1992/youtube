<script setup lang="ts">
const props = defineProps<{
  toPage: string;
  iconName: string;
  btnName: string;
}>();
</script>

<template>
  <NuxtLink :to="props.toPage">
    <button type="button" class="cursor-pointer">
      <Icon :name="props.iconName" size="24" class="mr-5" />
      {{ props.btnName }}
    </button>
  </NuxtLink>
</template>

<style scoped></style>
