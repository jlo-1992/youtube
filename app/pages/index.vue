<script setup lang="ts">
interface charactersInfo {
  name: string;
  house: string;
  ancestry: string;
  wand: string;
  image: string;
}

const { data }: charactersInfo = await useFetch("https://hp-api.onrender.com/api/characters");

const filteredCards = ref([]);
const selectedTag = ref("all");
const changeDisplay = () => {
  if (selectedTag.value) {
    filteredCards.value = data.filter((item) => item.house === selectedTag.value);
  }
};

const tagDetails = [
  {
    tag: "all",
    tagName: "所有人物",
  },
  {
    tag: "Gryffindor",
    tagName: "葛萊芬多",
  },
  {
    tag: "Ravenclaw",
    tagName: "雷文克勞",
  },
  {
    tag: "Hufflepuff",
    tagName: "赫夫帕夫",
  },
  {
    tag: "Slytherin",
    tagName: "史萊哲林",
  },
];
</script>

<template>
  <div>
    <TagsGroup
      v-for="(item, index) in tagDetails"
      :key="index"
      v-model="selectedTag"
      :tag-name="item.tagName"
      :tag="item.tag"
    />
    <div class="grid grid-cols-4 gap-4">
      <VideoCard
        v-for="(item, index) in data"
        :key="index"
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
