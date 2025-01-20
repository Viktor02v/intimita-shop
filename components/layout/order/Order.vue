<script setup lang="ts">
import { defineProps } from "vue";
import { useSidebarStore } from "@/store/sidebar.store";

import { useAddToCart } from "@/composables/useAddToCart";
import { useGetCartProducts } from "@/composables/useGetCartProducts";

const { cartMap } = useCartMutation();
const { data: productsInCart = ref([]) } = useGetCartProducts();
const { checkIsInCart, deleteAllCartItems } = useAddToCart();

onMounted(() => {
	if (Array.isArray(productsInCart.value)) {
		productsInCart.value.forEach((product) => {
			cartMap.value[product.$id] = true;
		});
	}
});

const props = defineProps({
	items: {
		type: Object,
		required: true,
	},
});

const sidebarStore = useSidebarStore();

onMounted(() => {
	console.log(props.items);
});
console.log(props.items);
</script>
<template>
	<div :class="sidebarStore.isOrderOpen
		? 'translate-y-0 duration-700 opacity-100 absolute top-0 left-0 w-full h-full z-40'
		: '-translate-y-[70vh] duration-700 opacity-0 absolute top-0 left-0 w-full h-full z-0'
		" v-if="items && items?.length > 0">

		<div class="w-full h-full bg-black">
			<div class="w-full text-center">
				<div class="text-3xl font-light text-white pb-8">Order</div>
			</div>
			<div class="w-full text-white">
				<form class="max-w-[80%] mx-auto flex flex-col justify-center items-center gap-6">
					<UiInput placeholder="Country" type="text" class="text-white border-b" />
					<UiInput placeholder="City" type="text" class="text-white border-b" />
					<UiInput placeholder="First name" type="" class="text-white border-b" />
					<UiInput placeholder="Second name" type="text" class="text-white border-b" />
					<UiInput placeholder="Tel" type="tel" class="text-white border-b" />
					<select name="Payment method" id=""
						class="w-full bg-transparent text-white border-b focus:ring-0 focus:outline-none">
						<option value="select" disabled selected hidden></option>
						<option value="mastercard">Mastercard</option>
						<option value="visa">Visa</option>
						<option value="paypal">Paypal</option>
					</select>
				</form>
			</div>
			<div class="w-full flex justify-center py-4 g-4">
				<UiButton @click="deleteAllCartItems.mutate()"
					class="inline-block text-white text-center border-b border-gray-400 bg-transparent px-3 hover:bg-transparent rounded-none">
					Make an order
				</UiButton>
				<UiButton @click="sidebarStore.toggleOrderOpen"
					class="inline-block text-white text-center border-b border-gray-400 bg-transparent px-3 hover:bg-transparent rounded-none">
					Close
				</UiButton>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>
