import { ref } from 'vue';
import { useActiveFilter } from '~/composables/useActiveFilter';
import { useFilteredList } from '~/composables/useFilteredList';

export function useFilter(data: any[], filters: any[], filterName: string) {
  const { activeFilter, setActiveFilter, isFilterActive, resetFilter } = useActiveFilter();
  const { filteredList, handleUpdateOrders } = useFilteredList(data);

  const handleResetActiveFilter = () => {
    resetFilter();
  };

  return {
    filteredList,
    handleUpdateOrders,
    activeFilter,
    setActiveFilter,
    isFilterActive,
    handleResetActiveFilter,
    filters,
    filterName
  };
}
