<script setup lang="ts">
import { defineProps } from "vue";

defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="w-full flex  flex-col md:flex-row items-center min-h-[700px] max-h-[700px] md:pr-4 sm:pr-8 md:pr-10">
    <!-- Image Section -->
    <LayoutProductImageSection :img="product?.foto_url" class="w-full sm:w-1/2 md:w-1/2" />

    <!-- Content Section -->
    <LayoutProductContentSection :item="product" class="w-full sm:w-1/2 md:w-2/3" />
  </div>
</template>
