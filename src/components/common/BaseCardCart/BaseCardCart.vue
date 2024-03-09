<script setup lang="ts">
import { computed } from 'vue';
import useBrandsStore from '@/stores/brands';
import useCartStore from '@/stores/cart';
import Styles from './style.module.scss';
import { AttributeCode, type CartProduct, type ConfigurableProduct, ProductType } from '@/types';
import BaseButtonsControl from '../BaseButtonsControl/BaseButtonsControl.vue';

const props = defineProps<{
  cartProduct: CartProduct;
}>();

const variant = computed(() => {
  if (props.cartProduct.product?.type === ProductType.CONFIGURABLE) {
    return (props.cartProduct.product as ConfigurableProduct).variants.find(
      (value) => value.product.id === props.cartProduct.product.variantId
    );
  }
  return undefined;
});

const color = computed(() => {
  if (variant.value) {
    return (props.cartProduct.product as ConfigurableProduct).configurable_options
      .find((value) => value.attribute_code === AttributeCode.COLOR)
      ?.values.find((c) => c.value_index === variant.value?.attributes[0].value_index);
  }
  return undefined;
});
const size = computed(() => {
  if (variant.value) {
    return (props.cartProduct.product as ConfigurableProduct).configurable_options
      .find((value) => value.attribute_code === AttributeCode.SIZE)
      ?.values.find((c) => c.value_index === variant.value?.attributes[1].value_index);
  }
  return undefined;
});

const brandsStore = useBrandsStore();
const cartStore = useCartStore();
</script>

<template>
  <div :class="Styles.info">
    <div :class="Styles.image">
      <img
        :src="
          variant
            ? '/TT_ASTRIO/' + variant.product.image
            : '/TT_ASTRIO/' + cartProduct.product.image
        "
        alt=""
      />
    </div>
    <div :class="Styles.name">
      {{
        brandsStore.brands.find((brand) => {
          return brand.id === cartProduct.product.brand;
        })?.title
      }}
      / {{ cartProduct.product.title }}
      <template v-if="variant">
        <div>Цвет: {{ color?.label }}</div>
        <div>Размер: {{ size?.label }}</div>
      </template>
    </div>
  </div>
  <div :class="Styles.price">
    {{ cartProduct.product.regular_price.value }} {{ cartProduct.product.regular_price.currency }}
  </div>
  <BaseButtonsControl
    :product="cartProduct.product"
    :variant-id="cartProduct.product.variantId"
    :class="Styles.buttonsControl"
  />
  <div :class="Styles.finalPrice">
    <span>
      {{ (cartProduct.product.regular_price.value * cartProduct.count).toFixed(2) }}
      {{ cartProduct.product.regular_price.currency }}
    </span>
    <button
      type="button"
      @click="
        cartStore.removeFromCart({
          productId: cartProduct.product.id,
          variantId: cartProduct.product.variantId,
          removeAll: true
        })
      "
      :class="Styles.delete"
    >
      <img src="/images/basket.svg" alt="" />
    </button>
  </div>
</template>
