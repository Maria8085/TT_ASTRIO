<script lang="ts">
import Catalog from '@/components/TTCatalog/TTCatalog.vue';
import BaseSidebar from '@/components/common/BaseSidebar/BaseSidebar.vue';
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
  <main>
    <div :class="Styles.main">
      <BaseSidebar />
      <Catalog />
    </div>
  </main>
</template>
