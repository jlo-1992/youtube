<script setup lang="ts">
interface Props {
  icon?: string;
  iconClass?: string;
}

const props = defineProps<Props>();
</script>

<template>
  <button class="cursor-pointer rounded-md p-2">
    <Icon v-if="props.icon" :name="props.icon" :class="props.iconClass" />
    <slot />
  </button>
</template>
