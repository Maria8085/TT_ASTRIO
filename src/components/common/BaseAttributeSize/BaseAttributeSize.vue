<script setup lang="ts">
import Styles from './style.module.scss';
import { type ConfigurableProduct } from '@/types';

defineProps<{
  option: ConfigurableProduct;
  value: number;
}>();
defineEmits(['onSelect']);
</script>

<template>
  <button
    type="button"
    v-for="size in option.values"
    :key="size.value_index"
    :style="{
      border: value === size.value_index ? '2px solid yellow' : '2px solid black',
      width: '35px',
      height: '20px',
      display: 'inline-block',
      background: 'transparent',
      borderRadius: '5px',
      cursor: 'pointer'
    }"
    @click="$emit('onSelect', size.value_index)"
  >
    {{ size.label }}
  </button>
</template>
