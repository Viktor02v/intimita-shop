<script setup lang="ts">
import { ref, watch } from "vue";
import { ARROW_DATA } from "../arrow/arrow.data";
import { useGetRandomListSelfCare } from "~/composables/useGetRandomListSelfCare";

const {
  data: randomList,
  isPending: isPendingRandom,
  isError: isErrorRandom,
} = useGetRandomListSelfCare();

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
        :filterName="'Self care'"
        @updateOrders="handleUpdateOrders"
      />
      <LayoutFilterByType
        :data="randomList ?? []"
        :filterBy="'cuticle-oil'"
        :filterName="'cuticle-oil'"
        :filterType="'selfCareType'"
        @updateOrders="handleUpdateOrders"
      />
      <LayoutFilterByType
        :data="randomList ?? []"
        :filterBy="'hand-and-body-cream'"
        :filterName="'hand/body-cream'"
        :filterType="'selfCareType'"
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
