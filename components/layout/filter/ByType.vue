<script setup lang="ts">
import { ref, watchEffect, defineEmits, defineProps } from "vue";
import { useSidebarFilter } from "~/composables/useSidebarFilter";

// Destructure values from composable
const { filterValues } = useSidebarFilter();

// Define emitted events
const emit = defineEmits(["updateOrders", "setActiveFilter"]);

// Define props
const props = defineProps<{
  data: any[]; // Array of data to filter
  filterBy: string; // Value to filter by
  filterName: string; // Display name for the filter
  filterType: string; // Key in data to filter by
  isActive: boolean; // Indicates if the filter is active
}>();

// Reactive filtered data
const filteredOrders = ref<any[]>([]);

// Watch `filterValues` and `props` to update filteredOrders
watchEffect(() => {
  if (!props.data || !props.filterType) {
    filteredOrders.value = [];
    return;
  }

  // Filter data based on `filterValues` or `props.filterBy`
  filteredOrders.value = props.data.filter(
    (item) =>
      item[props.filterType] === (filterValues.value as string) ||
      item[props.filterType] === props.filterBy
  );

  // Emit the filtered data
  emit("updateOrders", filteredOrders.value);
});

// Handle filter button click
const onFilterClick = () => {
  filteredOrders.value = props.data.filter(
    (item) =>
      item[props.filterType] === (filterValues.value as string) ||
      item[props.filterType] === props.filterBy
  );
  emit("updateOrders", filteredOrders.value);
};
</script>

<template>
  <div
    class="w-full md:w-[90%] flex flex-col md:justify-end md:items-end md:gap-8"
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
