<script lang="ts">
import Styles from './style.module.scss';
import useCartStore from '@/stores/cart';

export default {
  data() {
    return {
      Styles,
      cartStore: useCartStore()
    };
  }
};
</script>

<template>
  <header :class="Styles.header">
    <RouterLink to="/"><img src="/images/logo.png" alt="" /></RouterLink>
    <RouterLink to="/cart" :class="Styles.cart">
      <img src="/images/cart.svg" alt="" />
      <div :class="Styles.count" v-if="cartStore.countProduct > 0">
        {{ cartStore.countProduct }}
      </div>
    </RouterLink>
  </header>
</template>
