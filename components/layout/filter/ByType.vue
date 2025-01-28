<script setup lang="ts">
import { ref, watch, defineEmits, defineProps } from "vue";
import { useSidebarFilter } from "~/composables/useSidebarFilter";
import { useSidebarStore } from "~/store/sidebar.store";

const sidebarStore = useSidebarStore();

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
  sidebarStore.isSidebarOpenMore = false;
  sidebarStore.isSidebarOpenCatalog = false;
  sidebarStore.isPhoneOpen = false;
  // Emit the filtered data
  emit("updateOrders", filteredOrders.value);
});

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
