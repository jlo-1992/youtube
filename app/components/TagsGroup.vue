<script setup lang="ts">
const props = defineProps<{
  tag: string;
  tagName: string;
}>();
</script>

<template>
  <div
    class="mx-1 mb-7 inline-block cursor-pointer rounded-md bg-gray-100 px-3 py-1 font-bold hover:bg-black hover:text-white"
  >
    <input :id="props.tag" type="radio" name="harrypotter" class="hidden" />
    <label class="cursor-pointer" :for="props.tag">{{ props.tagName }} </label>
  </div>
</template>

<style scoped></style>
