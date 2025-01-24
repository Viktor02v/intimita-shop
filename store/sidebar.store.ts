export const useSidebarStore = defineStore("sidebar", {
  state: () => ({
    isSidebarOpenCatalog: false,
    isSidebarOpenMore: false,
    isCartOpen: false,
    isFavoritesOpen: false,
    isLoginOpen: false,
    isOrderOpen: false,
    isPhoneOpen: false,
  }),
  actions: {
    toggleSidebarCatalog() {
      this.isSidebarOpenCatalog = !this.isSidebarOpenCatalog;
    },
    toggleSidebarMore() {
      this.isSidebarOpenMore = !this.isSidebarOpenMore;
    },
    toggleCartOpen() {
      this.isCartOpen = !this.isCartOpen;
    },
    toggleFavoritesOpen() {
      this.isFavoritesOpen = !this.isFavoritesOpen;
    },
    toggleLoginOpen() {
      this.isLoginOpen = !this.isLoginOpen;
    },
    toggleOrderOpen() {
      this.isOrderOpen = !this.isOrderOpen;
    },
    togglePhoneOpen() {
      this.isPhoneOpen = !this.isPhoneOpen;
    },
  },
});
