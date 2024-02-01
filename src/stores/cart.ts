import { defineStore } from 'pinia';
import type { CartProducts, Product } from '@/types';

const useCartStore = defineStore('cartStore', {
  state: () => ({
    products: [] as CartProducts
  }),
  actions: {
    getCountProduct(id: number, variantId?: number): number | undefined {
      const cartProduct = this.products.find(
        (item) => item.product.id === id && variantId === item.product.variantId
      );
      if (cartProduct) {
        return cartProduct.count;
      }
      return undefined;
    },
    addToCart(product: Product, variantId?: number) {
      const index = this.products.findIndex(
        (item) => item.product.id === product.id && variantId === item.product.variantId
      );
      if (index >= 0) {
        this.products[index].count += 1;
      } else {
        this.products.push({ count: 1, product: { ...product, variantId: variantId } });
      }
    },
    removeFromCart({
      productId,
      variantId,
      removeAll = false
    }: {
      productId: number;
      removeAll: boolean;
      variantId?: number;
    }) {
      const index = this.products.findIndex(
        (item) => item.product.id === productId && variantId === item.product.variantId
      );
      if (index >= 0) {
        if (this.products[index].count > 1 && !removeAll) {
          this.products[index].count -= 1;
        } else {
          this.products.splice(index, 1);
        }
      }
    },
    setCount({
      productId,
      count,
      variantId
    }: {
      productId: number;
      count: number;
      variantId?: number;
    }) {
      const index = this.products.findIndex(
        (item) => item.product.id === productId && variantId === item.product.variantId
      );
      if (index >= 0) {
        if (count > 0) {
          this.products[index].count = count;
        } else {
          this.removeFromCart({ productId: productId, removeAll: true });
        }
      }
    }
  },
  getters: {
    countProduct(): string {
      return this.products
        .reduce((accumulator, currentValue) => {
          return accumulator + currentValue.count;
        }, 0)
        .toFixed(0);
    },
    totalAmount(): string {
      return this.products
        .reduce((accumulator, currentValue) => {
          return accumulator + currentValue.count * currentValue.product.regular_price.value;
        }, 0)
        .toFixed(2);
    }
  }
});

export default useCartStore;
