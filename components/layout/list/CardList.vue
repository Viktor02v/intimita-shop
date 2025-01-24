<script setup lang="ts">
import { defineProps } from "vue";
import type { Product } from "~/types/product.type";

const props = defineProps({
  item: {
    type: Object as () => Product,
    required: true,
  },
});

onMounted(() => {
  console.log(props.item);
});
</script>

<template>
  <div
    class="shadow-[0_4px_15px_rgba(0,0,0,0.1)] relative rounded w-full max-w-[240px] md:max-w-[270px] min-h-[360px] p-4 md:p-6 flex flex-col items-center"
  >
    <!-- Product Card Item -->
    <LayoutListCardItem :item="item" />

    <!-- On Sale Badge -->
    <LayoutListOnSaleItem v-if="item.isOnSale" />

    <!-- Favorite Button -->
    <LayoutListFavoriteButton :item="props.item" />

    <!-- Add to Cart Button -->
    <LayoutListAddToCartButton :item="props.item" />
  </div>
</template>

<style scoped></style>
