<script setup lang="ts">
import { useSidebarStore } from "@/store/sidebar.store";
const sidebarStore = useSidebarStore();
</script>

<template>
  <div
    class="fixed top-0 left-0 min-h-[120px] max-h-[120px] bg-black w-full z-30"
  >
    <div class="flex items-cetner min-h-[120px] max-h-[120px] px-[85px]">
      <div
        class="flex items-center text-[26px] hover:text-[#FFD095] text-[#989898]"
      >
        <Icon name="iconamoon:search-thin" />
      </div>
      <div class="px-[10vw]"></div>
      <div
        class="flex items-center text-[26px] hover:text-[#FFD095] text-[#989898]"
      >
        <LayoutHeaderMenu />
      </div>
      <div class="px-[5vw]"></div>
      <div
        class="flex items-center gap-[30px] text-[26px] transition-all duration-200 ease-out text-[#989898]"
      >
        <Icon name="fluent:person-32-light" class="hover:text-[#FFD095]" />
        <Icon name="mdi-light:heart" class="hover:text-[#FFD095]" />
        <Icon
          name="hugeicons:shopping-basket-01"
          class="hover:text-[#FFD095]"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
