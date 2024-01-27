<script setup lang="ts">
import useBrandsStore from '@/stores/brands';
import useCartStore from '@/stores/cart';
import Styles from './style.module.scss';
import type { Product } from '@/types';

defineProps<{
  product: Product;
}>();

const brandsStore = useBrandsStore();
const cartStore = useCartStore();
</script>

<template>
  <div :class="Styles.card">
    <div :class="Styles.image"><img :src="'/TT_ASTRIO' + product.image" alt="" /></div>
    <div :class="Styles.name">{{ product.title }}</div>
    <div :class="Styles.brand">
      {{
        brandsStore.brands.find((brand) => {
          return brand.id === product.brand;
        })?.title
      }}
    </div>
    <div :class="Styles.info">
      <div :class="Styles.price">
        {{ product.regular_price.value }} {{ product.regular_price.currency }}
      </div>
      <div>
        <div v-if="cartStore.getCountProduct(product.id)">
          <button
            type="button"
            :v-if="cartStore.getCountProduct(product.id)"
            @click="cartStore.removeFromCart(product.id, false)"
          >
            -
          </button>
          <span>{{ cartStore.getCountProduct(product.id) }}</span>
          <button type="button" @click="cartStore.addToCart(product)">+</button>
        </div>
        <div v-else>
          <button type="button" @click="cartStore.addToCart(product)">add to cart</button>
        </div>
      </div>
    </div>
  </div>
</template>
