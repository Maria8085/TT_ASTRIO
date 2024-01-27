import { defineStore } from 'pinia';
import type { Product } from '@/types';

type CartProducts = { count: number; product: Product }[];

const useCartStore = defineStore('cartStore', {
  state: () => ({
    products: [] as CartProducts
  }),
  actions: {
    getCountProduct(id: number): number | undefined {
      const cartProduct = this.products.find((item) => item.product.id === id);
      if (cartProduct) {
        return cartProduct.count;
      }
      return undefined;
    },
    addToCart(product: Product) {
      const index = this.products.findIndex((item) => item.product.id === product.id);
      if (index >= 0) {
        this.products[index].count += 1;
      } else {
        this.products.push({ count: 1, product });
      }
    },
    removeFromCart(productId: number, removeAll: boolean = false) {
      const index = this.products.findIndex((item) => item.product.id === productId);
      if (index >= 0) {
        if (this.products[index].count > 1 && !removeAll) {
          this.products[index].count -= 1;
        } else {
          this.products.splice(index, 1);
        }
      }
    }
  },
  getters: {
    countProduct(): number {
      return this.products.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.count;
      }, 0);
    }
  }
});

export default useCartStore;
