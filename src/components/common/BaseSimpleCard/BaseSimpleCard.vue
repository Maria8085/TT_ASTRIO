<script setup lang="ts">
import useBrandsStore from '@/stores/brands';
import Styles from './style.module.scss';
import type { SimpleProduct } from '@/types';
import BaseButtonsControl from '../BaseButtonsControl/BaseButtonsControl.vue';

defineProps<{
  product: SimpleProduct;
}>();

const brandsStore = useBrandsStore();
</script>

<template>
  <div :class="Styles.card">
    <div :class="Styles.image"><img :src="'/TT_ASTRIO/' + product.image" alt="" /></div>
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
      <BaseButtonsControl :product="product" :class="Styles.buttonsControl" />
    </div>
  </div>
</template>
