import { ref } from "vue";

export function useActiveFilter() {
  const activeFilter = ref<string | null>(null);

  const setActiveFilter = (filter: string) => {
    activeFilter.value = filter;
  };

  const isFilterActive = (filter: string) => activeFilter.value === filter;

  const resetFilter = () => {
    activeFilter.value = null; // Reset the active filter
  };

  return {
    activeFilter,
    setActiveFilter,
    isFilterActive,
    resetFilter, 
  };
}
