<script setup lang="ts">
const props = defineProps<{
  toPage: string;
  iconName: string;
  btnName: string;
}>();
</script>

<template>
  <NuxtLink :to="props.toPage">
    <Icon :name="props.iconName" size="24" class="mr-5" />
    {{ props.btnName }}
  </NuxtLink>
</template>

<style scoped></style>
