<script setup lang="ts">
import { useOrderStore } from "@/store/order.store";
import { useSidebarStore } from "@/store/sidebar.store";

const sidebarStore = useSidebarStore();
const orderStore = useOrderStore();
</script>

<template>
  <div
    :class="
      orderStore.isOrderComplete && !sidebarStore.isOrderOpen
        ? 'translate-y-0 duration-1000 opacity-100 absolute top-0 left-0 w-full h-full z-40'
        : '-translate-y-[150vh] duration-1000 opacity-0 absolute top-0 left-0 w-full h-full z-0'
    "
    class="w-full h-full bg-[#000000] text-white text-3xl flex justify-center items-center font-light font-monospace absolute top-0 left-0 z-50"
  >
    <div class="">Order Complete</div>
  </div>
</template>

<style scoped></style>
