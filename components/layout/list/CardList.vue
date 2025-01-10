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
    class="shadow-[0_4px_15px_rgba(0,0,0,0.1)] relative rounded min-w-[240px] min-h-[360px] p-[25px] flex flex-col items-center"
  >
    <LayoutListCardItem :item="item" />

    <LayoutListOnSaleItem v-if="item.isOnSale" />

    <LayoutListFavoriteButton :item="props.item" />

    <LayoutListAddToCartButton :item="props.item" />
  </div>
</template>

<style scoped></style>
