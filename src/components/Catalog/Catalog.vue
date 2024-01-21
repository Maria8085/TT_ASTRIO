<script lang="ts">
import BaseCard from '@/components/ui/BaseCard/BaseCard.vue';
import products from '@/task/products.json';
import Styles from './style.module.scss';

export default {
  data() {
    return {
      Styles,
      products: products
    };
  },
  components: { BaseCard }
};
</script>

<template>
  <div :class="Styles.wrapper">
    <div :class="Styles.title">Catalog</div>
    <div :class="Styles.catalog">
      <BaseCard v-for="item in products" :key="item.id" :product="item" />
    </div>
  </div>
</template>
