<script setup lang="ts">
import { useSidebarStore } from "@/store/sidebar.store";
import { useCloseSidebarIfOpen } from "~/composables/useCloseSidebarIfOpen";

const { closeSidebarIfOpen } = useCloseSidebarIfOpen();

const sidebarStore = useSidebarStore();
const router = useRouter();

const handleOut = () => {
  sidebarStore.toggleFavoritesOpen();
  router.push("/");
};
</script>

<template>
  <div
    class="flex flex-col space-y-[18px] text-[15px] font-medium items-center"
  >
    <UiButton
      @click="
        handleOut,
          closeSidebarIfOpen,
          (sidebarStore.isPhoneOpen = false),
          sidebarStore.toggleFavoritesOpen()
      "
      class="text-[#000000] min-w-[264px] max-w-[264px] bg-white border border-[#000000] hover:bg-transparent rounded-full py-[12px] px-[45px]"
    >
      Go on shopping</UiButton
    >
  </div>
</template>

<style scoped></style>
