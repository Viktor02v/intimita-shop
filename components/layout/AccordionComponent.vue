<script setup lang="ts">
import {
  ACCORDION_ONE_DATA,
  ACCORDION_TWO_DATA,
  ACCORDION_THREE_DATA,
  ACCORDION_FOUR_DATA,
  ACCORDION_TITLES,
} from "@/components/ui/accordion/accordion.data";
</script>
<template>
  <div class="max-w-[83vw] mx-auto my-[87px]">
    <h1 class="text-[36px] font-bold">{{ ACCORDION_TITLES[0].title }}</h1>
    <UiAccordion type="single" class="w-full mt-[45px]" collapsible>
      <UiAccordionItem
        v-for="item in ACCORDION_ONE_DATA"
        :key="item.title"
        :value="item.title"
      >
        <UiAccordionTrigger>{{ item.title }}</UiAccordionTrigger>
        <UiAccordionContent>
          {{ item.description }}
        </UiAccordionContent>
      </UiAccordionItem>
      <UiAccordionItem
        v-for="item in ACCORDION_TWO_DATA"
        :key="item.title"
        :value="item.title"
      >
        <UiAccordionTrigger>{{ item.title }}</UiAccordionTrigger>
        <UiAccordionContent>
          {{ item.description }}
        </UiAccordionContent>
      </UiAccordionItem>
      <UiAccordionItem
        v-for="item in ACCORDION_THREE_DATA"
        :key="item.title"
        :value="item.title"
      >
        <UiAccordionTrigger>{{ item.title }}</UiAccordionTrigger>
        <UiAccordionContent>
          {{ item.description }}
        </UiAccordionContent>
      </UiAccordionItem>
      <UiAccordionItem
        v-for="item in ACCORDION_FOUR_DATA"
        :key="item.title"
        :value="item.title"
      >
        <UiAccordionTrigger>{{ item.title }}</UiAccordionTrigger>
        <UiAccordionContent>
          {{ item.description }}
        </UiAccordionContent>
      </UiAccordionItem>
    </UiAccordion>
  </div>
  <div class="pt-[100px]"></div>
</template>

<style scoped></style>
