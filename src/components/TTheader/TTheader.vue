<script lang="ts">
import Styles from './style.module.scss';

export default {
  data() {
    return {
      Styles
    };
  }
};
</script>

<template>
  <header :class="Styles.header">
    <div><img src="/TT_ASTRIO/images/logo.png" alt="" /></div>
    <div :class="Styles.basket">
      <img src="/TT_ASTRIO/images/basket.svg" alt="" />
      <div class="count"></div>
    </div>
  </header>
</template>
