import { defineStore } from 'pinia';

export const useFaveCardStore = defineStore(
  'faveCard',
  () => {
    const faveList = ref<string[]>([]);

    const addToList = (cardId: string) => {
      faveList.value.push(cardId);
    };

    const removeFromList = (cardId: string) => {
      const targetIndex = faveList.value.findIndex((item) => item === cardId);
      if (targetIndex > -1) {
        faveList.value.splice(targetIndex, 1);
      }
    };

    return {
      faveList,
      addToList,
      removeFromList,
    };
  },
  {
    persist: {
      // storage: piniaPlugiPersistedstate.localStorage(),
      key: 'faveList',
      pick: ['faveList'],
    },
  },
);
