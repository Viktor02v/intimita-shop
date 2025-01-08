import { useSidebarStore } from "@/store/sidebar.store";

const sidebarStore = useSidebarStore();

export const toggleSidebar = (sidebar: string) => {
    // Close all other sidebars before toggling the target sidebar
    if (sidebar !== 'cart' && sidebarStore.isCartOpen) {
        sidebarStore.toggleCartOpen();
    }
    if (sidebar !== 'favorites' && sidebarStore.isFavoritesOpen) {
        sidebarStore.toggleFavoritesOpen();
    }
    if (sidebar !== 'More' && sidebarStore.isSidebarOpenMore) {
        sidebarStore.toggleSidebarMore();
    }
    if (sidebar !== 'Catalog' && sidebarStore.isSidebarOpenCatalog) {
        sidebarStore.toggleSidebarCatalog();
    }

    // Toggle the selected sidebar
    if (sidebar === 'cart') {
        sidebarStore.toggleCartOpen();
    } else if (sidebar === 'favorites') {
        sidebarStore.toggleFavoritesOpen();
    } else if (sidebar === 'More') {
        sidebarStore.toggleSidebarMore();
    } else if (sidebar === 'Catalog') {
        sidebarStore.toggleSidebarCatalog();
    }
};
