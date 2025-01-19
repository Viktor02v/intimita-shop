<script setup lang="ts">
import { useSidebarStore } from "@/store/sidebar.store";

const sidebarStore = useSidebarStore();
const router = useRouter();

const handleOut = () => {
  sidebarStore.toggleCartOpen();
  router.push("/");
};

// watchEffect(() => {
//   sidebarStore.isOrderOpen;

//   if (sidebarStore.isOrderOpen) {
//     console.log("Order open:", sidebarStore.isOrderOpen);
//   }
// });
</script>

<template>
  <div
    class="flex flex-col space-y-[18px] text-[15px] font-medium items-center"
  >
    <UiButton
      @click="sidebarStore.toggleOrderOpen"
      class="text-[#FFE8CB] min-w-[264px] max-w-[264px] border rounded-full bg-[#000000] hover:bg-[#000000] py-[12px] px-[50px]"
    >
      Make an order</UiButton
    >
    <UiButton
      @click="handleOut"
      class="text-[#000000] min-w-[264px] max-w-[264px] bg-white border border-[#000000] hover:bg-transparent rounded-full py-[12px] px-[45px]"
    >
      Go on shopping</UiButton
    >
  </div>
</template>

<style scoped></style>
