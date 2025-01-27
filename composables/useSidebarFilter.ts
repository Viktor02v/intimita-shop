const filterValues = ref("");
export function useSidebarFilter() {
  const sidebarFilter = (i: string) => {
    filterValues.value = i;
  };
  return { sidebarFilter, filterValues };
}
