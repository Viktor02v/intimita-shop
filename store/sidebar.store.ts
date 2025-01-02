export const useSidebarStore = defineStore("sidebar", {
  state: () => ({
    isSidebarOpenCatalog: false,
    isSidebarOpenMore: false,
  }),
  actions: {
    toggleSidebarCatalog() {
      this.isSidebarOpenCatalog = !this.isSidebarOpenCatalog;
    },
    toggleSidebarMore() {
      this.isSidebarOpenMore = !this.isSidebarOpenMore;
    },
  },
});
