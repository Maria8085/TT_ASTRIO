<script lang="ts">
import useBrandsStore from '@/stores/brands';
import Styles from './style.module.scss';

export default {
  data() {
    return {
      Styles,
      brandsStore: useBrandsStore()
    };
  },
  mounted() {
    this.brandsStore.getBrands();
  }
};
</script>

<template>
  <div :class="Styles.sidebar">
    <div :class="[Styles.title, Styles.brand]">All brands</div>
    <div :class="Styles.brand" v-for="item in brandsStore.brands" :key="item.id">
      {{ item.title }}
    </div>
  </div>
</template>
