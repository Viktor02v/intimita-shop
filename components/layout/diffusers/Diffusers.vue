<script setup lang="ts">
import { ref, watch } from "vue";
import { ARROW_DATA } from "../arrow/arrow.data";
import { useGetRandomListDiffusers } from "~/composables/useGetRandomListDiffusers";

const {
  data: randomList,
  isPending: isPendingRandom,
  isError: isErrorRandom,
} = useGetRandomListDiffusers();

const filteredList = ref<any>([]);
console.log(randomList);

watch(
  () => randomList?.value,
  (newData) => {
    if (newData) {
      filteredList.value = [...newData]; // Initialize with all meals
    }
  },
  { immediate: true }
);

const handleUpdateOrders = (updatedOrders: any) => {
  console.log("Updated orders in parent:", updatedOrders);
  filteredList.value = updatedOrders; // Update the filtered orders
  console.log("Filtered orders in parent:", updatedOrders.value);
};
</script>

<template>
  <div class="w-full h-full flex flex-col justify-center items-start">
    <div class="flex items-center gap-4">
      <LayoutFilterReset
        :data="randomList ?? []"
        :filterName="'Diffusers'"
        @updateOrders="handleUpdateOrders"
      />
      <LayoutFilterByType
        :data="randomList ?? []"
        :filterBy="'aroma-diffusers'"
        :filterName="'Aroma diffusers'"
        :filterType="'diffusersType'"
        @updateOrders="handleUpdateOrders"
      />
      <LayoutFilterByType
        :data="randomList ?? []"
        :filterBy="'dry-diffusers'"
        :filterName="'Dry diffusers'"
        :filterType="'diffusersType'"
        @updateOrders="handleUpdateOrders"
      />
      <LayoutFilterByType
        :data="randomList ?? []"
        :filterBy="'interior-diffusers'"
        :filterName="'Interior diffusers'"
        :filterType="'diffusersType'"
        @updateOrders="handleUpdateOrders"
      />
    </div>
    <section>
      <div class="w-full h-full">
        <LayoutList :items="filteredList" />
      </div>
      <LayoutArrowOnChange
        class="hover:cursor-pointer hover:translate-x-2.5 transition-all duration-700 py-28"
        :title="ARROW_DATA[0].title"
        :icon="ARROW_DATA[0].icon"
        :link="ARROW_DATA[0].link"
        :size="ARROW_DATA[0].size"
      />
    </section>
  </div>
</template>

<style scoped></style>
