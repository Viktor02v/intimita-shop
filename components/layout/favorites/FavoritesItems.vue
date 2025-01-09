<script setup lang="ts">
import { defineProps } from "vue";

defineProps({
  items: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <div class="w-4/6 max-h-[320px] overflow-auto scrollbar-none">
    <div v-for="product in items" :key="product.$id" class="w-full">
      <div class="w-full relative flex items-center gap-[10px] mb-5">
        <div
          class="min-h-[140px] max-h-[140px] min-w-[140px] max-w-[140px] overflow-hidden flex items-center justify-center"
        >
          <NuxtImg
            :src="product.foto_url"
            class="object-contain"
            alt="Product Image"
          />
        </div>

        <div
          class="w-full min-h-[140px] max-h-[140px] py-[20px] flex flex-col justify-between"
        >
          <div class="font-garamond text-[16px] font-light">
            {{ product.name }}
          </div>

          <div class="text-xs font-bold">
            <div class="flex items-center gap-1">
              <p v-if="product.isOnSale" class="line-through text-[#979797]">
                {{ product.onSalePrice }}
              </p>
              <span>UAN</span>
            </div>
            <div class="flex items-center gap-1">
              <p>{{ product.price }}</p>
              <span>UAN</span>
            </div>
          </div>
        </div>

        <LayoutListFavoriteButton :item="product" />
        <LayoutListAddToCartButton />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
