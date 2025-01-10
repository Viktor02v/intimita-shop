<script setup lang="ts">
import { ref, watch } from "vue";
import { ARROW_DATA } from "../arrow/arrow.data";
import { useGetSelfCare } from "~/composables/useGetSelfCare";

const {
  data: selfCare,
  isPending: isPendingRandom,
  isError: isErrorRandom,
} = useGetSelfCare();

const filteredList = ref<any>([]);
console.log(selfCare);

watch(
  () => selfCare?.value,
  (newData) => {
    if (newData) {
      filteredList.value = [...newData]; 
    }
  },
  { immediate: true }
);

const handleUpdateOrders = (updatedOrders: any) => {
  console.log("Updated orders in parent:", updatedOrders);
  filteredList.value = updatedOrders;
  console.log("Filtered orders in parent:", updatedOrders.value);
};
</script>

<template>
  <div class="w-full h-full flex flex-col justify-center items-start">
    <div class="flex items-center gap-4">
      <LayoutFilterReset
        :data="selfCare ?? []"
        :filterName="'Self care'"
        @updateOrders="handleUpdateOrders"
      />
      <LayoutFilterByType
        :data="selfCare ?? []"
        :filterBy="'cuticle-oil'"
        :filterName="'cuticle-oil'"
        :filterType="'selfCareType'"
        @updateOrders="handleUpdateOrders"
      />
      <LayoutFilterByType
        :data="selfCare ?? []"
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
