<script lang="ts">
import BaseCardCart from '@/components/common/BaseCardCart/BaseCardCart.vue';
import Styles from './style.module.scss';
import useCartStore from '@/stores/cart';
import { ProductType } from '@/types';

export default {
  computed: {
    ProductType() {
      return ProductType;
    }
  },
  data() {
    return {
      Styles,
      cartStore: useCartStore()
    };
  },
  components: { BaseCardCart },
  methods: {
    checkout() {
      // eslint-disable-next-line no-restricted-globals
      if (confirm('Сonfirm the purchase?')) {
        this.cartStore.products = [];
      }
    }
  }
};
</script>

<template>
  <main>
    <div :class="Styles.main">
      <span v-if="cartStore.products.length < 1" :class="Styles.noRezults">the cart is empty</span>
      <div v-else :class="Styles.wrapper">
        <h1 :class="Styles.title">Shopping Cart</h1>
        <div :class="Styles.catalog">
          <span :class="Styles.titleTable">Item</span>
          <span :class="Styles.titleTable">Price</span>
          <span :class="Styles.titleTable">Qty</span>
          <span :class="Styles.titleTable">Total</span>
          <BaseCardCart
            :cart-product="item"
            v-for="item in cartStore.products"
            :key="
              item.product.type === ProductType.CONFIGURABLE
                ? item.product.variantId
                : item.product.id
            "
          />
        </div>
        <div :class="Styles.totalAmount">
          Subtotal:
          {{ cartStore.totalAmount }}
        </div>
        <div :class="Styles.checkoutWrap">
          <button type="button" @click="checkout" :class="Styles.checkout">Checkout</button>
        </div>
      </div>
    </div>
  </main>
</template>
