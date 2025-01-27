<script setup lang="ts">
import { defineProps } from "vue";
import { useSidebarStore } from "@/store/sidebar.store";
import { useOrderStore } from "@/store/order.store";

const orderStore = useOrderStore();

const sidebarStore = useSidebarStore();

const { makeAnOrder } = useMakeAnOrder();

const props = defineProps({
  items: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div
    :class="
      sidebarStore.isOrderOpen
        ? 'translate-y-50 duration-700 opacity-100 absolute top-0 left-0 w-full h-full z-50 text-white'
        : '-translate-y-[150vh] duration-700 opacity-100 absolute top-0 left-0 w-full h-full z-50 text-white'
    "
    v-if="items && items?.length > 0"
  >
    <div
      class="w-full h-full bg-black text-white z-50 flex flex-col justify-center items-center"
    >
      <div class="w-full text-center">
        <h1 class="text-3xl font-light text-white md:pb-8 pb-16 z-50">Order</h1>
      </div>

      <LayoutOrderForm class="text-white" />

      <div class="w-full flex justify-center py-4">
        <UiButton
          @click="makeAnOrder.mutate()"
          class="inline-block text-white text-center border-b border-gray-400 bg-transparent px-3 hover:bg-transparent rounded-none"
        >
          Make an order
        </UiButton>
        <div class="px-4">
          <UiButton
            @click="sidebarStore.toggleOrderOpen"
            class="inline-block text-white text-center border-b border-gray-400 bg-transparent px-3 hover:bg-transparent rounded-none"
          >
            Close
          </UiButton>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
