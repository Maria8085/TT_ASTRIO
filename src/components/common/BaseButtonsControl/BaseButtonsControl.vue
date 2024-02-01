<script setup lang="ts">
import useCartStore from '@/stores/cart';
import Styles from './style.module.scss';
import type { Product, Variant } from '@/types';

defineProps<{
  product: Product;
  variantId?: number;
}>();

const cartStore = useCartStore();
</script>

<template>
  <div :class="Styles.buttonsControl">
    <div v-if="cartStore.getCountProduct(product.id, variantId)" :class="Styles.buttonsCount">
      <button
        type="button"
        @click="
          cartStore.removeFromCart({
            productId: product.id,
            variantId: variantId,
            removeAll: false
          })
        "
        :class="Styles.countMines"
      >
        <img src="/images/minus.svg" alt="" />
      </button>
      <label>
        <input
          :class="Styles.inputCount"
          :value="cartStore.getCountProduct(product.id, variantId)"
          @change="
            (event: Event) => {
              const target = event.target as HTMLInputElement;
              cartStore.setCount({
                productId: product.id,
                count: target.valueAsNumber,
                variantId: variantId
              });
            }
          "
          type="number"
      /></label>
      <button
        type="button"
        @click="cartStore.addToCart(product, variantId)"
        :class="Styles.countPlus"
      >
        <img src="/images/plus.svg" alt="" />
      </button>
    </div>
    <div v-else>
      <button
        :class="Styles.addToCard"
        type="button"
        @click="cartStore.addToCart(product, variantId)"
      >
        add to cart
      </button>
    </div>
  </div>
</template>
