<script setup lang="ts">
import { MENU_DATA } from "@/components/layout/header/menu.data";
import {
  FOOTER_CATALOG_DATA,
  FOOTER_MENU_DATA,
  FOOTER_CONTACTS_DATA,
  FOOTER_TITLES,
  FOOTER_PAYMENT_DATA,
} from "@/components/layout/footer/footer.data";
</script>

<template>
  <div
    class="h-[740px] md:h-[363px] absolute z-50 bg-black w-full flex flex-col justify-between px-6 py-[15px] sm:px-10 md:px-20 pb-[50px] md:pb-[71px]"
  >
    <h1
      class="w-full text-center text-white text-[30px] md:text-[40px] hover:text-[#DCAF75] transition-all duration-500"
    >
      {{ MENU_DATA[2].name }}
    </h1>

    <div
      class="md:w-[596px] flex flex-col md:flex-row md:justify-start items-start text-white mt-6 md:mt-[58px] flex-grow gap-6"
    >
      <LayoutFooterColumn
        :type="FOOTER_CATALOG_DATA"
        :title="FOOTER_TITLES[0]"
      />
      <LayoutFooterColumn :type="FOOTER_MENU_DATA" :title="FOOTER_TITLES[1]" />
      <LayoutFooterColumn
        :type="FOOTER_CONTACTS_DATA"
        :title="FOOTER_TITLES[2]"
      />
    </div>

    <div
      class="w-full flex justify-center md:justify-end items-center gap-10 md:gap-[63px] text-white mt-0"
    >
      <ul
        v-for="item in FOOTER_PAYMENT_DATA"
        :key="item.name"
        class="flex flex-row md:flex-col justify-center items-center"
      >
        <img :src="item.img" class="h-6 md:h-auto" />
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
