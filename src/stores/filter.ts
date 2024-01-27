import { defineStore } from 'pinia';

const useFilterStore = defineStore('filterStore', {
  state: () => ({
    brandId: undefined as number | undefined
  })
});

export default useFilterStore;
