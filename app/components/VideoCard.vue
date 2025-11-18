<script setup lang="ts">
import type { CharactersInfo } from '~/types/character.ts';

const props = defineProps<{ person: CharactersInfo }>();
</script>

<template>
  <div>
    <div class="shadow- w-70 rounded-lg border-5 border-amber-900 bg-amber-800 p-2 shadow-black">
      <h1 class="mb-3 rounded-md p-2 text-center text-2xl font-bold text-black shadow-xl">{{ props.person.name }}</h1>
      <img
        :src="props.person.image"
        alt="charactorImage"
        class="h-90 w-full rounded-xl border-8 object-cover object-center"
        loading="lazy"
      />
      <div class="mt-3 flex justify-between rounded-md border-2 bg-white p-3 opacity-80">
        <div>
          <h3 class="font-bold text-black">{{ props.person.house }}</h3>
          <h4 class="font-bold text-black">{{ props.person.ancestry }} · {{ props.person.yearOfBirth }}</h4>
        </div>
        <div>
          <FaveBtn :id="props.person.id" />
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
