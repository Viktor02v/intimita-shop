<script setup lang="ts">
import { defineProps } from "vue";
import { useSidebarStore } from "@/store/sidebar.store";
import { useOrderStore } from "@/store/order.store";

const orderStore = useOrderStore();

const sidebarStore = useSidebarStore();

const { makeAnOrder } = useMakeAnOrder({
	countryRef: orderStore.countryRef,
	cityRef: orderStore.cityRef,
	firstNameRef: orderStore.firstNameRef,
	lastNameRef: orderStore.lastNameRef,
	telRef: orderStore.telRef,
	paymentRef: orderStore.paymentRef,
});

const props = defineProps({
	items: {
		type: Object,
		required: true,
	},
});

</script>

<template>
	<div :class="sidebarStore.isOrderOpen
		? 'translate-y-0 duration-700 opacity-100 absolute top-0 left-0 w-full h-full z-40'
		: '-translate-y-[70vh] duration-700 opacity-0 absolute top-0 left-0 w-full h-full z-0'
		" v-if="items && items?.length > 0">

		<div class="w-full h-full bg-white">

			<div class="w-full text-center">
				<h1 class="text-3xl font-light text-black pb-8">Order</h1>
			</div>

			<LayoutOrderForm />

			<div class="w-full flex justify-center py-4">
				<UiButton @click="makeAnOrder.mutate()"
					class="inline-block text-white text-center border-b border-gray-400 bg-transparent px-3 hover:bg-transparent rounded-none">
					Make an order
				</UiButton>
				<div class="px-4">
					<UiButton @click="sidebarStore.toggleOrderOpen"
						class="inline-block text-white text-center border-b border-gray-400 bg-transparent px-3 hover:bg-transparent rounded-none">
						Close
					</UiButton>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>
