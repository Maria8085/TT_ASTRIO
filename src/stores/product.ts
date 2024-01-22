import { defineStore } from 'pinia';
import products from '@/task/products.json';
import type { Product } from '@/types';

const useProductsStore = defineStore('productsStore', {
  state: () => ({
    products: [] as Product[]
  }),
  actions: {
    async getProducts() {
      const { data } = await products.get('/authors');
      this.products = data;
    }
  }
});

export default useProductsStore;
