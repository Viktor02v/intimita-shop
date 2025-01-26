export const useFilterStore = defineStore("filter", {
	state: () => {
		const isFilterOpen = ref(false)

		return {
			isFilterOpen
		};
	},
	actions:{
			toggleFilter() {
			this.isFilterOpen = !this.isFilterOpen
			},
	}
});



