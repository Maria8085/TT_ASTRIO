<script setup lang="ts">
import brands from '@/task/brands.json';
import Styles from './style.module.scss';
import type { Product } from '@/types';

defineProps<{
  product: Product;
}>();
</script>

<template>
  <div :class="Styles.card">
    <div :class="Styles.image"><img :src="'/TT_ASTRIO' + product.image" alt="" /></div>
    <div :class="Styles.name">{{ product.title }}</div>
    <div :class="Styles.brand">{{ product.brand }}</div>
    <div :class="Styles.price">
      <p>{{ product.regular_price.value }} {{ product.regular_price.currency }}</p>
      <button>+</button>
    </div>
  </div>
</template>
