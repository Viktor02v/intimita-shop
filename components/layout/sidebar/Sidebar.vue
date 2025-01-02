<script setup lang="ts">
import { useGetItemse } from "@/composables/useGetItems";
import { useSidebarStore } from "@/store/sidebar.store";

import {
  SIDEBAR_TITLES,
  SIDEBAR_CANDLES_DATA,
  SIDEBAR_DIFFUSERS_DATA,
  SIDEBAR_GIFTS_DATA,
  SIDEBAR_PROMOTIONS_AND_DISCOUNTS_DATA,
  SIDEBAR_SELF_CARE_DATA,
} from "@/components/layout/sidebar/sidebar.data";

const sidebarStore = useSidebarStore();

const { data } = useGetItemse();
</script>

<template>
  <div>
    <div
      v-for="item in SIDEBAR_TITLES"
      :key="item.name"
      class="fixed top-[120px] left-0 h-[60vh] w-[34vw] bg-white py-4 z-50"
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
      <LayoutSidebarCatalog
        :items="SIDEBAR_CANDLES_DATA"
        :title="SIDEBAR_TITLES[0]"
      />

      <LayoutSidebarCatalog
        :items="SIDEBAR_DIFFUSERS_DATA"
        :title="SIDEBAR_TITLES[1]"
      />
      <LayoutSidebarCatalog
        :items="SIDEBAR_SELF_CARE_DATA"
        :title="SIDEBAR_TITLES[2]"
      />
      <LayoutSidebarCatalog
        :items="SIDEBAR_GIFTS_DATA"
        :title="SIDEBAR_TITLES[3]"
      />
    </div>
    <div
      v-for="item in SIDEBAR_TITLES"
      :key="item.name"
      class="fixed top-[120px] left-0 h-[65vh] w-[34vw] bg-white py-6 flex flex-col justify-start items-start z-50"
      :class="
        sidebarStore.isSidebarOpenMore
          ? 'translate-x-0 duration-1000 opacity-100'
          : '-translate-x-full duration-1000 opacity-100'
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
  </div>
</template>

<style scoped></style>
