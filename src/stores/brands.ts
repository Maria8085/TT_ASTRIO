import { defineStore } from 'pinia';
import jsonDataBrands from '@/task/brands.json';
import type { Brands } from '@/types';

const useBrandsStore = defineStore('brandsStore', {
  state: () => ({
    brands: jsonDataBrands as Brands[]
  }),
  actions: {
    async getBrands() {
      const { data } = await JSON.parse(brands);
      this.brands = data;
    }
  }
});

export default useBrandsStore;
