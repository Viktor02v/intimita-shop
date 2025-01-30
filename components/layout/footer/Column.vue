<template>
  <div class="w-full flex flex-col justify-start items-start gap-2 text-white">
    <div
      class="text[#FFF] font-comfortaa text-[20px] font-normal mb-[12px] hover:text-[#DCAF75]"
    >
      {{ title.name }}
    </div>
    <ul v-for="item in type" :key="item.name" class="flex flex-col">
      <NuxtLink
        :to="item.url"
        class="text-[#FFF] text-[14px] text-Comfortaa font-normal hover:translate-x-[10px] hover:text-[#DCAF75] transition-all duration-500"
      >
        {{ item.name }}
      </NuxtLink>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  type: {
    type: Object,
    required: true,
  },
  title: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped></style>
