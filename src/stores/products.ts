import { defineStore } from 'pinia';
// import jsonDataProducts from '@/task/products.json';
import jsonDataProducts from '@/task/level3/products.json';
import type { Product } from '@/types';

const useProductsStore = defineStore('productsStore', {
  state: () => ({
    products: jsonDataProducts as Product[]
  })
});

export default useProductsStore;
