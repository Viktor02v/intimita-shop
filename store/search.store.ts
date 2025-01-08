export const useSearchStore = defineStore("search", {
  state: () => ({
    isSearchOpen: false,
  }),
  actions: {
    toggleSearch() {
      this.isSearchOpen = !this.isSearchOpen;
    },
  },
});
