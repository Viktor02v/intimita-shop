<script setup lang="ts">
import { MENU_DATA } from "@/components/layout/header/menu.data";
import { MENU_DATA_PHONE } from "@/components/layout/header/menu.data-phone";
import { useSidebarStore } from "@/store/sidebar.store";
import { toggleSidebar } from "@/composables/useToggleSidebar";
import { useScreenSize } from "@/composables/useWindowSize";
import { useCloseSidebarIfOpen } from "~/composables/useCloseSidebarIfOpen";

const { closeSidebarIfOpen } = useCloseSidebarIfOpen();

const { isDesktop, isTablet, isMobile } = useScreenSize();
const sidebarStore = useSidebarStore();

const closePhoneSidebar = (i: any) => {
  if ((sidebarStore.isPhoneOpen && i === "About") || i === "Blog") {
    sidebarStore.isPhoneOpen = false;
    console.log("Phone sidebar closed:", sidebarStore.isPhoneOpen);
  }
};
</script>

<template>
  <nav class="text-xl">
    <ul class="flex flex-col md:flex-row items-center gap-[67px] font-normal">
      <NuxtLink
        :to="item.url"
        v-for="item in isMobile ? MENU_DATA_PHONE : MENU_DATA"
        :key="item.name"
        class="text-white text-center w-full"
        @click="closePhoneSidebar(item.name), closeSidebarIfOpen"
      >
        <li
          :class="[
            item.name === 'Intimita Shop'
              ? 'font-garamond text-[32px] font-light'
              : '',
            item.name === 'Catalog' && sidebarStore.isSidebarOpenCatalog
              ? 'text-[#FFD095]'
              : '',
            item.name === 'More' && sidebarStore.isSidebarOpenMore
              ? 'text-[#FFD095]'
              : '',
            'flex items-center hover:text-[#FFD095] transition-all ease-out cursor-pointer duration-200',
          ]"
        >
          <span @click="toggleSidebar(item.name)">{{ item.name }}</span>
          <Icon
            v-if="item.name === 'Catalog' && sidebarStore.isSidebarOpenCatalog"
            name="iconamoon:arrow-up-2-light"
            size="18"
          />
          <Icon
            v-else-if="item.name === 'More' && sidebarStore.isSidebarOpenMore"
            name="iconamoon:arrow-up-2-light"
            size="18"
          />
          <Icon
            v-else-if="['Catalog', 'More'].includes(item.name)"
            name="iconamoon:arrow-down-2-light"
            size="18"
          />
        </li>
      </NuxtLink>
    </ul>
  </nav>
</template>

<style scoped></style>
