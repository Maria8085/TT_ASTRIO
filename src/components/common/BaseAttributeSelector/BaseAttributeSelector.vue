<script setup lang="ts">
import { computed } from 'vue';
import Styles from './style.module.scss';
import { AttributeCode, type ConfigurableProduct, type Variant } from '@/types';

const props = defineProps<{
  product: ConfigurableProduct;
  currentVariant: Variant;
}>();
defineEmits(['onSelect']);

const currentColor = computed(() => {
  return props.currentVariant.attributes[0].value_index;
});
const currentSize = computed(() => {
  return props.currentVariant.attributes[1].value_index;
});
</script>

<template>
  <div
    v-for="option in product.configurable_options"
    :key="option.attribute_id"
    :class="Styles.buttonsVariants"
  >
    <template v-if="option.attribute_code == AttributeCode.COLOR">
      <button
        type="button"
        v-for="color in option.values"
        :key="color.value_index"
        :style="{
          backgroundColor: color.value,
          border: currentColor === color.value_index ? '2px solid yellow' : '2px solid black',
          width: '35px',
          height: '20px',
          display: 'inline-block',
          borderRadius: '5px'
        }"
        :class="[
          Styles.selectable,
          !product.variants.find(
            (value) =>
              value.attributes[1].value_index === currentSize &&
              value.attributes[0].value_index === color.value_index
          ) && Styles.disabled
        ]"
        @click="
          $emit(
            'onSelect',
            product.variants.find(
              (value) =>
                value.attributes[1].value_index === currentSize &&
                value.attributes[0].value_index === color.value_index
            )
          )
        "
      />
    </template>
    <template v-else>
      <button
        type="button"
        v-for="size in option.values"
        :key="size.value_index"
        :class="[
          Styles.selectable,
          !product.variants.find(
            (value) =>
              value.attributes[0].value_index === currentColor &&
              value.attributes[1].value_index === size.value_index
          ) && Styles.disabled
        ]"
        :style="{
          border: currentSize === size.value_index ? '2px solid yellow' : '2px solid black',
          width: '35px',
          height: '20px',
          display: 'inline-block',
          background: 'transparent',
          borderRadius: '5px'
        }"
        :disabled="
          !product.variants.find(
            (value) =>
              value.attributes[0].value_index === currentColor &&
              value.attributes[1].value_index === size.value_index
          )
        "
        @click="
          $emit(
            'onSelect',
            product.variants.find(
              (value) =>
                value.attributes[0].value_index === currentColor &&
                value.attributes[1].value_index === size.value_index
            )
          )
        "
      >
        {{ size.label }}
      </button>
    </template>
  </div>
</template>
