<script setup lang="ts">
import { useSidebarStore } from "@/store/sidebar.store";
import { useCloseSidebarIfOpen } from "~/composables/useCloseSidebarIfOpen";

const { closeSidebarIfOpen } = useCloseSidebarIfOpen();

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
      class="text-[#FFE8CB] md:min-w-[264px] min-w-[164px] md:max-w-[264px] max-w-[164px] border rounded-full bg-[#000000] hover:bg-[#000000] py-[12px] px-[50px]"
    >
      Make an order</UiButton
    >
    <UiButton
      @click="
        handleOut,
          closeSidebarIfOpen,
          (sidebarStore.isPhoneOpen = false),
          sidebarStore.toggleCartOpen()
      "
      class="text-[#000000] md:min-w-[264px] min-w-[164px] md:max-w-[264px] max-w-[164px] bg-white border border-[#000000] hover:bg-transparent rounded-full py-[12px] px-[45px]"
    >
      Go on shopping</UiButton
    >
  </div>
</template>

<style scoped></style>
