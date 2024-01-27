<script lang="ts">
import BaseCard from '@/components/ui/BaseCard/BaseCard.vue';
import Styles from './style.module.scss';
import useProductsStore from '@/stores/products';
import useFilterStore from '@/stores/filter';
import useCartStore from '@/stores/cart';

export default {
  data() {
    return {
      Styles,
      productsStore: useProductsStore(),
      filterStore: useFilterStore(),
      cartStore: useCartStore()
    };
  },
  computed: {
    filtredStore() {
      if (this.filterStore.brandId === undefined) {
        return this.productsStore.products;
      }
      return this.productsStore.products.filter((product) => {
        return product.brand === this.filterStore.brandId;
      });
    }
  },
  components: { BaseCard }
};
</script>

<template>
  <div :class="Styles.wrapper">
    <div :class="Styles.title">Catalog</div>
    <div :class="Styles.catalog">
      <BaseCard v-for="item in filtredStore" :key="item.id" :product="item" />
    </div>
  </div>
</template>
