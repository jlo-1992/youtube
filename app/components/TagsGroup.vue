<script setup lang="ts">
// import type { tag } from '~/types/index';
import type { House } from '/types/character.ts';

const props = defineProps<{
  tag: House | 'all';
  tagName: string;
}>();
</script>

<template>
  <div
    class="mx-1 mb-7 inline-block cursor-pointer rounded-md bg-gray-100 px-3 py-1 font-bold hover:bg-black hover:text-white"
  >
    <button type="button">
      {{ props.tagName }}
    </button>
    <!-- <input :id="data.tag" type="radio" name="harrypotter" class="hidden" />
    <label class="cursor-pointer" :for="data.tag">{{ data.tagName }} </label> -->
  </div>
</template>

<style scoped></style>
