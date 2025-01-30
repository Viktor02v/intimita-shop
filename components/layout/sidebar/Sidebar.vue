<script setup lang="ts">
import { useGetItemsOnSale } from "~/composables/useGetItemsOnSale";
import { useSidebarStore } from "@/store/sidebar.store";

import { computed } from "vue";

const sidebarStore = useSidebarStore();

import {
  SIDEBAR_TITLES,
  SIDEBAR_CANDLES_DATA,
  SIDEBAR_DIFFUSERS_DATA,
  SIDEBAR_GIFTS_DATA,
  SIDEBAR_PROMOTIONS_AND_DISCOUNTS_DATA,
  SIDEBAR_SELF_CARE_DATA,
} from "@/components/layout/sidebar/sidebar.data";

const sidebar = ref<HTMLElement | null>(null);

const closeSidebar = () => {
  sidebarStore.isSidebarOpenCatalog = false;
};

const handleClickOutside = (event: Event) => {
  if (sidebar.value && !sidebar.value.contains(event.target as Node)) {
    closeSidebar();
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<template>
  <div>
    <div
      v-for="item in SIDEBAR_TITLES"
      :key="item.name"
      class="fixed top-[30vh] md:top-[120px] left-0 md:h-[519.5px] h-full w-[60vw] md:w-[34vw] px-[4vw] py-[4vh] bg-white z-50"
      :class="
        sidebarStore.isSidebarOpenCatalog
          ? 'translate-x-0 duration-1000 opacity-100'
          : '-translate-x-full duration-1000 opacity-100'
      "
    >
      <div class="absolute top-[5vh] right-[5vw] flex flex-col gap-2">
        <button class="text-[12px] hover:text-[#FFD095] duration-500">
          UKR
        </button>
        <button class="text-[12px] hover:text-[#FFD095] duration-500">
          ENG
        </button>
      </div>
      <div>
        <LayoutSidebarCatalog
          :items="SIDEBAR_CANDLES_DATA"
          :title="SIDEBAR_TITLES[0]"
          :url="SIDEBAR_TITLES[0].url"
        />

        <LayoutSidebarCatalog
          :items="SIDEBAR_DIFFUSERS_DATA"
          :title="SIDEBAR_TITLES[1]"
          :url="SIDEBAR_TITLES[1].url"
        />
        <LayoutSidebarCatalog
          :items="SIDEBAR_SELF_CARE_DATA"
          :title="SIDEBAR_TITLES[2]"
          :url="SIDEBAR_TITLES[2].url"
        />
        <LayoutSidebarCatalog
          :items="SIDEBAR_GIFTS_DATA"
          :title="SIDEBAR_TITLES[3]"
          :url="SIDEBAR_TITLES[3].url"
        />
      </div>
    </div>

    <div
      v-for="item in SIDEBAR_TITLES"
      :key="item.name"
      class="fixed top-[30vh] md:top-[120px] left-0 md:h-[519.5px] h-full w-[60vw] md:w-[34vw] px-[4vw] py-[4vh] bg-white z-50"
      :class="
        sidebarStore.isSidebarOpenMore
          ? 'translate-x-0 duration-1000 opacity-100'
          : '-translate-x-[200%] duration-1000 opacity-100'
      "
    >
      <LayoutSidebarCatalog
        :items="SIDEBAR_PROMOTIONS_AND_DISCOUNTS_DATA"
        :title="SIDEBAR_TITLES[4]"
      />
      <div class="py-8"></div>
      <div class="w-full flex flex-col justify-start items-start">
        <LayoutSidebarCatalog :title="SIDEBAR_TITLES[5]" />
        <LayoutSidebarCatalog :title="SIDEBAR_TITLES[6]" />
        <LayoutSidebarCatalog :title="SIDEBAR_TITLES[7]" />
      </div>
    </div>

    <!-- Cart -->
    <LayoutCart class="md:h-[519.5px] h-full w-[100vw] md:w-[34vw]" />
    <!-- Favorites -->
    <LayoutFavorites class="md:h-[519.5px] h-full w-[100vw] md:w-[34vw]" />
    <LayoutLogin class="md:h-[519.5px] h-full w-[100vw] md:w-[34vw]" />
  </div>
</template>

<style scoped></style>
