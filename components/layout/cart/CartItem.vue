<script setup lang="ts">
import { defineProps } from "vue";

defineProps({
  items: {
    type: Object,
    required: true,
  },
});
//something
</script>
<template>
  <div class="md:w-4/6 w-6/6 max-h-[160px] overflow-auto scrollbar-none">
    <div v-for="product in items" :key="product.$id" class="w-full">
      <div class="w-full relative flex items-center gap-[10px] mb-5">
        <NuxtLink
          :to="`/products/${product.$id}`"
          class="min-h-[140px] max-h-[140px] min-w-[140px] max-w-[140px] overflow-hidden flex items-center justify-center"
        >
          <NuxtImg
            :src="product.foto_url"
            class="object-contain"
            alt="Product Image"
          />
        </NuxtLink>

        <div
          class="w-full min-h-[140px] max-h-[140px] py-[20px] flex flex-col justify-between"
        >
          <div class="font-garamond text-[16px] font-light">
            {{ product.name }}
          </div>

          <div class="flex items-center space-x-[52px]">
            <div class="uppercase text-[12px] font-normal">Amount</div>

            <div class="flex space-x-[11px] items-center">
              <Icon name="ic:round-minus" />
              <div>1</div>
              <Icon name="ic:round-plus" />
            </div>
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

        <LayoutListAddToCartButton :item="product" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
