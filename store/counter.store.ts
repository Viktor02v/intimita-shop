export const useCounterStore = defineStore("counter", {
	state: () => ({
		counts: {}, // Key-value pair: product ID -> count
	 }),
	 actions: {
		plus(productId) {
		  if (!this.counts[productId]) {
			 this.counts[productId] = 0;
		  }
		  this.counts[productId]++;
		},
		minus(productId) {
		  if (this.counts[productId] > 0) {
			 this.counts[productId]--;
		  }
		},
	 },
  });