<script setup lang="ts">
import BaseSimpleCard from '@/components/common/BaseSimpleCard/BaseSimpleCard.vue';
import BaseConfigurableCard from '@/components/common/BaseConfigurableCard/BaseConfigurableCard.vue';
import { ProductType, type Product } from '@/types';

defineProps<{
  product: Product;
}>();
</script>

<template>
  <BaseSimpleCard v-if="product.type == ProductType.SIMPLE" :product="product" />
  <BaseConfigurableCard v-else :product="product" />
</template>
