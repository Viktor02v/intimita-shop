<script setup lang="ts">
import { ref, watch, defineEmits, defineProps } from "vue";
import { useSidebarFilter } from "~/composables/useSidebarFilter";

const { filterValues } = useSidebarFilter();

const emit = defineEmits(["updateOrders", "setActiveFilter"]);

// Props
const props = defineProps<{
  data: any[]; // Ensure data is always an array
  filterBy: string;
  filterName: string;
  filterType: string;
  isActive: boolean;
}>();

// Reactive filtered orders
const filteredOrders = ref([]); // Initialize as an empty array

// Ensure props.data is valid before filtering
watch(
  () => props.data,
  (newData) => {
    if (newData && props.filterType && props.filterBy) {
      filteredOrders.value = newData.filter(
        (item) => item[props.filterType] === props.filterBy
      );
    } else {
      filteredOrders.value = []; // Fallback to empty array
    }
    emit("updateOrders", filteredOrders.value);
  },
  { immediate: true } // Run this watch immediately on component mount
);

// Watch for changes in filterValues and update filteredOrders
watch(
  () => filterValues.value,
  (newFilterValues) => {
    filteredOrders.value = newFilterValues;
    emit("updateOrders", filteredOrders.value);
  }
);

// Handle filter click
const onFilterClick = () => {
  if (props.data && props.filterType && props.filterBy) {
    filteredOrders.value = props.data.filter(
      (item) => item[props.filterType] === props.filterBy
    );
    emit("updateOrders", filteredOrders.value);
    emit("setActiveFilter", props.filterBy); // Notify parent to set active filter
  }
};
</script>

<template>
  <div
    class="w-[100%] md:w-[90%] flex flex-col md:justify-end md:items-end md:gap-8"
  >
    <div
      class="flex flex-col md:flex-row justify-center items-center py-2 md:py-8"
    >
      <UiButton
        :class="[
          'w-[35vw] md:w-[150px] text-[13px] font-light cursor-pointer bg-white shadow-lg rounded-3xl border border-gray-500',
          isActive
            ? 'bg-black text-[#FFD095]'
            : 'bg-white text-black hover:bg-black hover:text-[#FFD095]',
        ]"
        @click="onFilterClick"
      >
        {{ props.filterName }}
      </UiButton>
    </div>
  </div>
</template>

<style scoped>
/* Add your custom styles here */
</style>
