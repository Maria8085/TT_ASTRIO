<script lang="ts">
import useBrandsStore from '@/stores/brands';
import Styles from './style.module.scss';
import useFilterStore from '@/stores/filter';

export default {
  data() {
    return {
      Styles,
      brandsStore: useBrandsStore(),
      filterStore: useFilterStore()
    };
  },
  methods: {
    setBrand(id: number | undefined) {
      this.filterStore.brandId = id;
    }
  }
};
</script>

<template>
  <div :class="Styles.sidebar">
    <button type="button" :class="[Styles.title, Styles.brand]" @click="setBrand(undefined)">
      All brands
    </button>
    <button
      type="button"
      :class="Styles.brand"
      v-for="item in brandsStore.brands"
      :key="item.id"
      @click="setBrand(item.id)"
    >
      {{ item.title }}
    </button>
  </div>
</template>
