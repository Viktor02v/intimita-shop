<script setup lang="ts">
import { ARROW_DATA } from "../arrow/arrow.data";
import { useGetProducts } from "~/composables/useGetProducts";
import { candleFilters } from "@/components/layout/filter/filters";
import { useFilter } from '~/composables/useFilter';

const {
	data: candles,
	isPending: isPendingCandles,
	isError: isErrorCandles,
} = useGetProducts("candle");

const {
	filteredList,
	handleUpdateOrders,
	activeFilter,
	setActiveFilter,
	isFilterActive,
	handleResetActiveFilter,
	filters,
	filterName,
} = useFilter(candles, candleFilters, 'Candles');

</script>

<template>
	<div class="w-full h-full flex flex-col justify-center items-start">

		<LayoutFilterButtons :data="candles" :filter-name="'Candles'" :filter-type="'candleType'"
			:filter-data="candleFilters" :handle-update-orders="handleUpdateOrders"
			:handle-reset-active-filter="handleResetActiveFilter" :is-filter-active="isFilterActive"
			:set-active-filter="setActiveFilter" />

		<div>
			<div class="w-full h-full">
				<LayoutList :items="filteredList" />
			</div>
			<LayoutArrowOnChange class="hover:cursor-pointer hover:translate-x-2.5 transition-all duration-700 py-28"
				:title="ARROW_DATA[0].title" :icon="ARROW_DATA[0].icon" :link="ARROW_DATA[0].link"
				:size="ARROW_DATA[0].size" />
		</div>
	</div>
</template>
