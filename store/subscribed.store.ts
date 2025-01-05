export const useIsSubscribedStore = defineStore("subscribed", {
  state: () => ({
    isSubscribed: false,
  }),
  actions: {
    toggleIsSubscribed() {
      this.isSubscribed = !this.isSubscribed;
    },
  },
});
