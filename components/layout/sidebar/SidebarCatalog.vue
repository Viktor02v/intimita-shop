<script setup lang="ts">
import { useSidebarStore } from "@/store/sidebar.store";
import {
  SIDEBAR_TITLES,
  SIDEBAR_CANDLES_DATA,
  SIDEBAR_DIFFUSERS_DATA,
  SIDEBAR_GIFTS_DATA,
  SIDEBAR_PROMOTIONS_AND_DISCOUNTS_DATA,
} from "@/components/layout/sidebar/sidebar.data";
import { defineProps } from "vue";

const props = defineProps({
  items: {
    type: Object,
    required: false,
  },
  title: {
    type: Object,
    required: true,
  },
});
const sidebarStore = useSidebarStore();
</script>
<template>
  <div class="w-[35vw] flex justify-center items-center">
    <div class="w-3/4 h-full flex flex-col justify-start items-start">
      <h1
        class="text-black font-garamond text-[20px] font-light mt-2 hover:text-[#FFD095] duration-500"
      >
        {{ title.name }}
      </h1>
      <div v-for="item in props.items" :key="item.name">
        <div
          class="text-[12px] 2xl:text-[16px] text-black p-1 hover:text-[#FFD095] hover:translate-x-2 duration-500"
        >
          {{ item.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
