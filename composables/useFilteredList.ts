import { ref, watch } from "vue";

export function useFilteredList(data: any[]) {
  const filteredList = ref<any[]>([]);

  watch(
    () => data,
    (newData) => {
      if (newData) {
        filteredList.value = [...newData];
      }
    },
    { immediate: true }
  );

  // Function to update the filtered list
  const handleUpdateOrders = (updatedOrders: any) => {
    filteredList.value = updatedOrders;
    console.log("Updated orders:", updatedOrders);
  };

  return {
    filteredList,
    handleUpdateOrders,
  };
}
