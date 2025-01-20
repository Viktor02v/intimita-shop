
export const useOrderStore = defineStore("order", {
state: () => {
	const isOrderComplete =  false
	const countryRef = ref("");
	const cityRef = ref("");
	const firstNameRef = ref("")
	const lastNameRef = ref("");
	const telRef = ref(0);
	const paymentRef = ref("");
		return {
			isOrderComplete,
			countryRef,
			cityRef,
			firstNameRef,
			lastNameRef,
			telRef,
			paymentRef
		};
	},
actions: {
   toggleOrderComplete() {
      this.isOrderComplete = !this.isOrderComplete;
   },
},
});
