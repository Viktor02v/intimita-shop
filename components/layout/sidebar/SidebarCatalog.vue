<script setup lang="ts">
import { useSidebarStore } from "@/store/sidebar.store";
import { useCloseSidebarIfOpen } from "~/composables/useCloseSidebarIfOpen";

const { closeSidebarIfOpen } = useCloseSidebarIfOpen();

import { defineProps } from "vue";

const sidebarStore = useSidebarStore();

const props = defineProps({
  items: {
    type: Object,
    required: false,
  },
  title: {
    type: Object,
    required: true,
  },
  url: {
    type: String,
  },
});
</script>
<template>
  <div class="w-[60vw] md:w-[35vw] flex justify-start items-center z-50 px-2">
    <div class="w-3/4 h-full flex flex-col justify-start items-start">
      <NuxtLink
        :to="props.url"
        @click="
          closeSidebarIfOpen,
            (sidebarStore.isPhoneOpen = false),
            closeSidebarIfOpen()
        "
        class="text-black font-garamond text-[20px] font-light mt-2 hover:text-[#FFD095] duration-500"
      >
        {{ props.title.name }}
      </NuxtLink>
      <div v-for="item in props.items" :key="item.name">
        <div
          class="text-[12px] 2xl:text-[16px] text-black p-1 hover:text-[#FFD095] hover:translate-x-2 duration-500"
        >
          {{ item.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
