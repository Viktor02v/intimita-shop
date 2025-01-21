import { ref, watch, type Ref } from "vue";

export function useFilteredList(data: Ref<any[] | null>) {
const filteredList = ref<any[]>([]);


watch(
   () => data.value,
   (newData) => {
      if (newData) {
      filteredList.value = [...newData];
      }
   },
   { immediate: true }
);


const handleUpdateOrders = (updatedOrders: any) => {
   filteredList.value = updatedOrders;
};

return {
   filteredList,
   handleUpdateOrders,
};
}
