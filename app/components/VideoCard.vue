<script setup lang="ts">
import type { CharactersInfo } from '~/types/character.ts';

// const props = withDefaults(defineProps<{ person: CharactersInfo }>(), {
//   id: '',
//   name: '',
//   house: 'Gryffindor',
//   ancestry: '',
//   yearOfBirth: 0,
//   image: '/images/quokka.jpg',
// });

const { person } = defineProps<CharactersInfo>();
// const data={ ..., image:'/images/quokka.jpg'}

const isFavorite = ref<boolean>(false);
const toggleFavorite = () => {};
</script>

<template>
  <div>
    <div class="shadow- w-70 rounded-lg border-5 border-amber-900 bg-amber-800 p-2 shadow-black">
      <h1 class="mb-3 rounded-md text-center text-2xl font-bold text-black shadow-xl">{{ person.name }}</h1>
      <img
        :src="person.image"
        alt="charactorImage"
        class="h-90 w-full rounded-xl border-8 object-cover object-center"
      />
      <div class="mt-3 flex justify-between rounded-md border-2 bg-white p-3 opacity-80">
        <div>
          <h3 class="font-bold text-black">{{ person.house }}</h3>
          <h4 class="font-bold text-black">{{ person.ancestry }} · {{ person.yearOfBirth }}</h4>
        </div>
        <div>
          <button type="button" class="cursor-pointer">
            <Icon name="meteor-icons:heart" size="20" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
