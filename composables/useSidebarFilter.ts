import {
  SIDEBAR_TITLES,
  SIDEBAR_CANDLES_DATA,
  SIDEBAR_DIFFUSERS_DATA,
  SIDEBAR_GIFTS_DATA,
  SIDEBAR_PROMOTIONS_AND_DISCOUNTS_DATA,
} from "@/components/layout/sidebar/sidebar.data";
const filterValues = ref();
export function useSidebarFilter() {
  const sidebarFilter = (i: any) => {
    filterValues.value = i;
  };
  return { sidebarFilter, filterValues };
}
