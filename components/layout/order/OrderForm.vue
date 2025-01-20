<script setup lang="ts">
import { useOrderStore } from "@/store/order.store";

const orderStore = useOrderStore();

const formattedPhone = computed({
	get: () =>
		orderStore.telRef ? orderStore.telRef.toString() : "", // Display as string
	set: (value: string) => {
		orderStore.telRef = value.replace(/[^0-9]/g, "")
			? parseInt(value.replace(/[^0-9]/g, ""))
			: 0; // Store as number, remove non-numeric characters
	},
});
</script>

<template>
	<div class="w-full text-white">
		<form class="max-w-[80%] mx-auto flex flex-col justify-center items-center gap-6">
			<UiInput v-model="orderStore.countryRef" placeholder="Country" type="text" class="text-white border-b" />
			<UiInput v-model="orderStore.cityRef" placeholder="City" type="text" class="text-white border-b" />
			<UiInput v-model="orderStore.firstNameRef" placeholder="First name" type="" class="text-white border-b" />
			<UiInput v-model="orderStore.lastNameRef" placeholder="Last name" type="text" class="text-white border-b" />
			<UiInput v-model="formattedPhone" placeholder="Tel" type="tel" class="text-white border-b" />
			<select name="Payment method" id=""
				class="w-full bg-transparent text-white border-b focus:ring-0 focus:outline-none">
				<option disabled selected hidden></option>
				<option :value="(orderStore.paymentRef = 'mastercard')">Mastercard</option>
				<option :value="(orderStore.paymentRef = 'visa')">Visa</option>
				<option :value="(orderStore.paymentRef = 'paypal')">Paypal</option>
			</select>
		</form>
	</div>
</template>

<style scoped></style>