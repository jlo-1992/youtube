<script setup lang="ts">
const inputText = ref<string>('');
const lowerCase = inputText.value.toLowerCase();

const emitSearchResult = () => {
  if (inputText.value) {
  }
};
</script>

<template>
  <div class="mr-5 flex">
    <input
      type="text"
      class="mr-2 h-10 w-100 rounded-full rounded-r-md border border-gray-400 p-1 pl-5"
      placeholder="搜尋"
    />
    <button
      type="button"
      class="-ml-2 h-10 w-15 cursor-pointer rounded-full rounded-l-md border border-gray-400 bg-gray-100 px-2"
      @click="emitSearchResult()"
    >
      <Icon name="mdi-search" size="30" class="mt-1" />
    </button>
  </div>
</template>

<style scoped></style>
