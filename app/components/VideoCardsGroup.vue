<script setup lang="ts">
import type { CharactersInfo, House } from '~/types/character';

const { data } = await useFetch<CharactersInfo[]>('https://hp-api.onrender.com/api/characters');

const filteredCards = ref<CharactersInfo[]>([]);
const selectedTag = ref<House | 'all'>('all');

watchEffect(() => {
  filteredCards.value = data.value;
});

watch(selectedTag, (newValue) => {
  if (selectedTag.value === 'all') {
    filteredCards.value = data.value ?? [];
  } else {
    filteredCards.value = data.value?.filter((item) => item.house === newValue) || [];
  }
});

const tags = [
  {
    tag: 'all',
    tagName: '所有人物',
  },
  {
    tag: 'Gryffindor',
    tagName: '葛萊芬多',
  },
  {
    tag: 'Ravenclaw',
    tagName: '雷文克勞',
  },
  {
    tag: 'Hufflepuff',
    tagName: '赫夫帕夫',
  },
  {
    tag: 'Slytherin',
    tagName: '史萊哲林',
  },
];
</script>

<template>
  <div>
    <TagsGroup v-for="item in tags" :key="item.tag" v-model="selectedTag" :tag="item" />
    <div class="grid grid-cols-7 gap-4">
      <VideoCard v-for="item in filteredCards" :key="item.id" :person="item" />
    </div>
  </div>
</template>

<style></style>
