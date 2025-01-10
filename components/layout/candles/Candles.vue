<script setup lang="ts">
import { ARROW_DATA } from "../arrow/arrow.data";
import { ref, watch } from "vue";
import { useGetCandles } from "~/composables/useGetCandles";

const {
  data: candles,
  isPending: isPendingCandles,
  isError: isErrorCandles,
} = useGetCandles();

const filteredList = ref<any>([]);
console.log(candles);

watch(
  () => candles?.value,
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
        :data="candles ?? []"
        :filterName="'Perfumed'"
        @updateOrders="handleUpdateOrders"
      />
      <LayoutFilterByType
        :data="candles ?? []"
        :filterType="'candleType'"
        :filterBy="'perfumed'"
        :filterName="'Perfumed'"
        @updateOrders="handleUpdateOrders"
      />
      <LayoutFilterByType
        :data="candles ?? []"
        :filterType="'candleType'"
        :filterBy="'craft'"
        :filterName="'Craft'"
        @updateOrders="handleUpdateOrders"
      />
      <LayoutFilterByType
        :data="candles ?? []"
        :filterType="'candleType'"
        :filterBy="'soy'"
        :filterName="'Soy'"
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
