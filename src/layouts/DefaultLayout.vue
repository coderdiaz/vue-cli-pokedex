<template>
  <div class="default-layout">
    <!-- header -->
    <header-partial></header-partial>
    <!-- end header -->
    <!-- filter section -->
    <slot name="filters"></slot>
    <!-- end filter section -->
    <!-- main -->
    <main class="main-section mb-5">
      <div class="container mx-auto">
        <slot name="content"></slot>
      </div>
    </main>
    <!-- end main -->
    <!-- footer -->
    <footer-partial></footer-partial>
    <!-- end footer -->
  </div>
</template>

<script>
import HeaderPartial from '@/partials/HeaderPartial.vue';
import FooterPartial from '@/partials/FooterPartial.vue';

export default {
  name: 'DefaultLayout',
  components: {
    HeaderPartial,
    FooterPartial,
  },
};
</script>
