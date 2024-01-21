<script lang="ts">
import brands from '@/task/brands.json';
import Styles from './style.module.scss';

export default {
  data() {
    return {
      Styles,
      data: brands
    };
  }
};
</script>

<template>
  <div :class="Styles.sidebar">
    <div :class="Styles.title">All brands</div>
    <div :class="Styles.brand" v-for="item in data" :key="item.id">{{ item.title }}</div>
  </div>
</template>
