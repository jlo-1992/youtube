<script setup lang="ts">
import type { CharactersInfo } from '~/types/character';

const { data } = await useFetch<CharactersInfo[]>('https://hp-api.onrender.com/api/characters');

const filteredCards = ref<CharactersInfo[]>([]);
const selectedTag = ref<'all' | 'Gryffindor' | 'Ravenclaw' | 'Hufflepuff' | 'Slytherin'>('all');
// const changeDisplay = () => {
//   if (selectedTag.value) {
//     filteredCards.value = data.value.filter((item) => item.house === selectedTag.value);
//   }
// };

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
    <TagsGroup v-for="item in tags" :key="item.tag" v-model="selectedTag" :tag-name="item.tagName" :tag="item.tag" />
    <div class="grid grid-cols-4 gap-4">
      <VideoCard
        v-for="item in filteredCards"
        :key="item.id"
        :name="item.name"
        :house="item.house"
        :ancestry="item.ancestry"
        :wand="item.wand.core"
        :image="item.image || '/images/quokka.jpg'"
      />
    </div>
  </div>
</template>

<style></style>
