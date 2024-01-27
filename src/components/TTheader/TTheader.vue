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
    <div><img src="/TT_ASTRIO/images/logo.png" alt="" /></div>
    <div :class="Styles.cart">
      <img src="/TT_ASTRIO/images/cart.svg" alt="" />
      <div :class="Styles.count" v-if="cartStore.countProduct > 0">
        {{ cartStore.countProduct }}
      </div>
    </div>
  </header>
</template>
