export const useIsOrderStore = defineStore("ordered", {
  state: () => ({
    isOrderComplete: false,
  }),
  actions: {
    toggleOrderComplete() {
      this.isOrderComplete = !this.isOrderComplete;
    },
  },
});
