<script setup lang="ts">
import Styles from './style.module.scss';
import { type ConfigurableProduct, type Variant } from '@/types';

defineProps<{
  option: ConfigurableProduct;
  value: number;
}>();
defineEmits(['onSelect']);
</script>

<template>
  <button
    type="button"
    v-for="color in option.values"
    :key="color.value_index"
    :style="{
      backgroundColor: color.value,
      border: value === color.value_index ? '2px solid yellow' : '2px solid black',
      width: '35px',
      height: '20px',
      display: 'inline-block',
      borderRadius: '5px',
      cursor: 'pointer'
    }"
    @click="$emit('onSelect', color.value_index)"
  />
</template>
