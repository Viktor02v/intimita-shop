<script setup lang="ts">
import { ref, watch } from "vue";
import { useSidebarStore } from "@/store/sidebar.store";
import { useGetRandomListCandles } from "~/composables/useGetRandomList";
import { useSearchStore } from "~/store/search.store";
const onSearchStore = useSearchStore();
const sidebarStore = useSidebarStore();
const {
  data: randomList,
  isPending: isPendingRandom,
  isError: isErrorRandom,
} = useGetRandomListCandles();
</script>

<template>
  <div
    class="fixed top-0 left-0 min-h-[120px] max-h-[120px] bg-black w-full z-30"
  >
    <div
      class="flex items-center min-h-[120px] max-h-[120px] px-[85px] relative"
    >
      <button>
        <Icon
          @click="onSearchStore.isSearchOpen = true"
          v-if="!onSearchStore.isSearchOpen"
          name="ion:search"
          class="text-[26px] text-gray-200 hover:text-[#FFD095] absolute bottom-1/3 left-1/8"
        />
        <div
          class="absolute bottom-1/3 left-1/8 -translate-x-1/8 flex items-center text-[#989898]"
          v-else
        >
          <LayoutFilterBySearch :data="randomList ?? []" />
        </div>
      </button>
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
