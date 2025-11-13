<script setup lang="ts">
import type { House } from '~/types/character';

const props = defineProps<{
  tag: House | 'all';
  tagName: string;
}>();

const selectedTag = defineModel<House | 'all'>({});
const selectTag = () => {
  selectedTag.value = props.tag;
};
</script>

<template>
  <div
    class="mx-1 mb-7 inline-block cursor-pointer rounded-md bg-gray-100 px-3 py-1 font-bold hover:bg-black hover:text-white"
  >
    <button type="button">
      {{ props.tagName }}
    </button>
  </div>
</template>

<style scoped></style>
