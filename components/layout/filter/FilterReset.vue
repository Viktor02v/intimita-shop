<script setup lang="ts">
import { ref, onMounted, watch } from "vue";

const emit = defineEmits(["updateOrders"]);

// State to control the filter visibility
const onOpen = ref(false);
const searchQuery = ref("");

// Props
const props = defineProps<{
  data: any[];

  filterName: string;
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

const resetFilter = () => {
  const sortedOrders = [...props.data].sort((a, b) => {
    const dateA = new Date(a.$createdAt);
    const dateB = new Date(b.$createdAt);
    return dateB.getTime() - dateA.getTime();
  });
  console.log("Reset filter applied:", sortedOrders); // Log filtered orders
  emit("updateOrders", sortedOrders);
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
    <div class="flex items-center py-8">
      <buttonn
        class="text-[36px] font-garamond min-w-[10vw]"
        @click="resetFilter"
        >{{ props.filterName }}</buttonn
      >
    </div>
  </section>
</template>

<style scoped>
/* Add your custom styles here */
</style>
