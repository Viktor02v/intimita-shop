import { useSidebarStore } from "@/store/sidebar.store";

const sidebarStore = useSidebarStore();

export function useCloseSidebarIfOpen() {
  const closeSidebarIfOpen = () => {
    if (
      sidebarStore.isSidebarOpenCatalog ||
      sidebarStore.isSidebarOpenMore ||
      sidebarStore.isCartOpen ||
      sidebarStore.isFavoritesOpen ||
      sidebarStore.isLoginOpen
    ) {
      sidebarStore.isSidebarOpenCatalog = false;
      sidebarStore.isSidebarOpenMore = false;
      sidebarStore.isCartOpen = false;
      sidebarStore.isFavoritesOpen = false;
      sidebarStore.isLoginOpen = false;
    } else {
      return;
    }
  };
  return { closeSidebarIfOpen };
}
