<script setup lang="ts">
import type { Tag } from '~/types/index';

const selectedTag = defineModel<string>();
const props = defineProps<{ tag: Tag }>();

const setTag = () => {
  selectedTag.value = props.tag.tag;
};

const isSelected = computed(() => {
  return selectedTag.value === props.tag.tag;
});
</script>

<template>
  <div
    class="mx-1 mb-7 inline-block rounded-md px-3 py-1 font-bold"
    :class="['bg-gray-100 hover:bg-black hover:text-white', isSelected ? 'bg-black text-white' : '']"
  >
    <button type="button" class="cursor-pointer" @click="setTag()">
      {{ props.tag.tagName }}
    </button>
  </div>
</template>

<style scoped></style>
