<script setup lang="ts">
import { ref, onMounted, watch } from "vue";

const emit = defineEmits(["updateOrders"]);

// State to control the filter visibility
const onOpen = ref(false);

// Props
const props = defineProps<{
  data: any[];
  filterBy: string;
  filterName: string;
  filterType: string;
}>();

// Watch for changes in orders prop
watch(
  () => props.data,
  (newOrders, oldOrders) => {
    console.log("Orders updated:", newOrders); // Logs the updated orders whenever it changes
    console.log("Previous orders:", oldOrders); // Logs the previous orders
  },
  { immediate: true } // Runs immediately on mount
);

// Filter functions

const onTypeFilter = () => {
  const filteredOrders = props.data.filter((data) => {
    return data[props.filterType] === props.filterBy;
  });
  console.log(props.data);
  console.log("filter applied:", filteredOrders); // Log filtered orders
  emit("updateOrders", filteredOrders);
  console.log(props.filterType);
  onOpen.value = false;
};

// Check if the orders are received correctly
onMounted(() => {
  console.log("Mounted orders:", props.data); // Check if orders are passed from the parent
});
</script>

<template>
  <section class="w-[90%] flex flex-col justify-end items-end gap-8">
    <!-- Toggle Button -->
    <div class="flex items-center space-5 py-8">
      <UiButton
        class="w-[150px] text-[13px] font-light bg-white shadow-lg rounded-3xl hover:bg-black hover:text-[#FFD095] text-black border border-gray-500"
        @click="onTypeFilter"
        >{{ props.filterName }}</UiButton
      >
    </div>
  </section>
</template>

<style scoped>
/* Add your custom styles here */
</style>
