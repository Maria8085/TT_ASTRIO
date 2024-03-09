<script setup lang="ts">
import { computed, ref } from 'vue';
import BaseAttributeSelector from '@/components/common/BaseAttributeSelector/BaseAttributeSelector.vue';
import useBrandsStore from '@/stores/brands';
import Styles from './style.module.scss';
import { type ConfigurableProduct, type Variant } from '@/types';
import BaseButtonsControl from '../BaseButtonsControl/BaseButtonsControl.vue';

const brandsStore = useBrandsStore();
const props = defineProps<{
  product: ConfigurableProduct;
}>();

const currentVariantId = ref<number>(props.product.variants[0].product.id);
const currentVariant: Variant = computed(() => {
  return props.product.variants.find((value) => value.product.id === currentVariantId.value);
});

function setCurrentVariant(variant: Variant) {
  currentVariantId.value = variant.product.id;
}
</script>

<template>
  <div :class="Styles.card">
    <div :class="Styles.image">
      <img :src="'/TT_ASTRIO/' + currentVariant.product.image" alt="" />
    </div>
    <div :class="Styles.name">{{ product.title }}</div>
    <div :class="Styles.brand">
      {{
        brandsStore.brands.find((brand) => {
          return brand.id === product.brand;
        })?.title
      }}
    </div>
    <div :class="Styles.info">
      <div :class="Styles.price">
        {{ product.regular_price.value }} {{ product.regular_price.currency }}
      </div>
      <BaseButtonsControl
        :variant-id="currentVariantId"
        :product="product"
        :class="Styles.buttonsControl"
      />
    </div>
    <BaseAttributeSelector
      :product="product"
      :currentVariant="currentVariant"
      @on-select="setCurrentVariant"
    />
  </div>
</template>
