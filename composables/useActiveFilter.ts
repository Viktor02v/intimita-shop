import { ref } from "vue";

export function useActiveFilter() {
const activeFilter = ref<string | null>(null);

const setActiveFilter = (filter: string) => {
   activeFilter.value = filter;
};

const isFilterActive = (filter: string) => {
   return activeFilter.value === filter;
};

return {
   activeFilter,
   setActiveFilter,
   isFilterActive,
};
}
