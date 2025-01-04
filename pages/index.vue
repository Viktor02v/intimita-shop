<script setup lang="ts">
import { useGetItemsOnSale } from "~/composables/useGetItemsOnSale"

const { data: items } = useGetItemsOnSale()
</script>

<template>
	<div class="w-[100vw]">
		<!-- Slider -->
		<LayoutSlider />

		<!-- Often buy list -->
		<div class="my-[70px] w-full px-[135px]">
			<h1 class="text-4xl font-bold pl-[42px] mb-[45px]">People often buy</h1>
			<LayoutList :items="items?.slice(4, 8)" />
		</div>

	</div>
</template>

<style scoped>

</style>
