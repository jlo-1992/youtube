<script setup lang="ts">
import { useFaveCardStore } from '~/stores/faveCardStore';
import type { CharactersInfo } from '~/types/character.ts';

definePageMeta({
  middleware() {
    const { loggedIn } = useUserSession();
    if (!loggedIn.value) {
      const toast = useToast();
      toast.add({ title: '請登入', description: '需登入才能瀏覽該頁面', color: 'error' });
      return navigateTo('/login');
    }
  },
});

const faveCardStore = useFaveCardStore();

const { data } = await useFetch<CharactersInfo[]>('https://hp-api.onrender.com/api/characters');

const faveList: string[] = faveCardStore.faveList;

const favoriteCards = ref<CharactersInfo[]>([]);

watchEffect(() => {
  console.log(favoriteCards);
  favoriteCards.value =
    data.value?.filter((item) => {
      return faveList.includes(item.id);
    }) ?? [];
});
</script>

<template>
  <div class="grid grid-cols-5 gap-4">
    <VideoCard v-for="item in favoriteCards" :key="item.id" :person="item" />
  </div>
</template>
