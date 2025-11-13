<script setup lang="ts">
import type { CharactersInfo } from '~/types/character';

// const props = defineProps<{
//   character: CharactersInfo;
// }>();

const character = defineModel('filteredCards', {
  type: String,
  default: 'MUKI space',
});
</script>

<template>
  <div>
    <div class="w-65">
      <img :src="props.image" alt="charactorImage" class="h-60 w-full rounded-xl object-cover object-center" />
      <div class="mt-3 grid grid-flow-col">
        <div>
          <img :src="props.image" class="m-auto w-1/3 rounded-full" alt="channellogo" />
        </div>
        <div>
          <h1 class="font-bold">{{ props.name }}</h1>
          <h3 class="text-gray-500">{{ props.house }}</h3>
          <h4 class="text-gray-500">{{ props.ancestry }} · {{ props.wand }}</h4>
        </div>
        <div>
          <button type="button">
            <Icon name="meteor-icons:ellipsis" size="20" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
