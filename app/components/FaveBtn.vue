<script setup lang="ts">
import { useFaveCardStore } from '~/stores/faveCardStore';

const faveCardStore = useFaveCardStore();

const props = defineProps<{ id: string }>();

const isFave = computed(() => {
  return faveCardStore.isFave(props.id);
});

const toggleFave = () => {
  if (isFave.value) {
    faveCardStore.removeFromList(props.id);
  } else {
    faveCardStore.addToList(props.id);
  }
};
</script>

<template>
  <button type="button" class="cursor-pointer" @click="toggleFave">
    <Icon :name="isFave ? 'mdi-heart' : 'mdi-heart-outline'" size="20" />
  </button>
</template>

<style scoped></style>
