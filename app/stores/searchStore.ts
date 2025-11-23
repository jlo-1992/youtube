import { defineStore } from 'pinia';

export const useSearchStore = defineStore(
  'search',
  () => {
    const searchTarget = ref<string>('');

    const setSearchTarget = (target: string) => {
      searchTarget.value = target;
    };

    const removeSearchTarget = () => {
      searchTarget.value = '';
    };

    return {
      searchTarget,
      setSearchTarget,
      removeSearchTarget,
    };
  },
  {
    persist: {
      // storage: piniaPlugiPersistedstate.localStorage(),
      key: 'search',
      pick: ['search'],
    },
  },
);
