<script lang="ts">
import Catalog from '@/components/Catalog/Catalog.vue';
import BaseSidebar from '@/components/ui/BaseSidebar/BaseSidebar.vue';
import Styles from './style.module.scss';

export default {
  data() {
    return {
      Styles
    };
  },
  components: { BaseSidebar, Catalog }
};
</script>

<template>
  <main :class="Styles.main">
    <BaseSidebar />
    <Catalog />
  </main>
</template>
