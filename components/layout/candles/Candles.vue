<script setup lang="ts">
import { ARROW_DATA } from "../arrow/arrow.data";
import { useGetProducts } from "~/composables/useGetProducts";
import { candleFilters } from "@/components/layout/filter/filters";
import { useFilter } from '~/composables/useFilter';
import { useFilterStore } from '@/store/filter.store';

const filterStore = useFilterStore();

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

const toggleFilter = () => {
	filterStore.isFilterOpen = !filterStore.isFilterOpen;
};
</script>

<template>
	<div class="w-full relative h-full flex flex-col justify-center py-20 items-end md:items-center">

		<div
			:class="[
				'flex items-center bg-white rounded-md md:bg-inherit self-start z-30 fixed  md:border-none md:relative top-1/2 md:top-0 left-0 -translate-y-1/2 md:-translate-y-0  transform transition-transform duration-500 ease-in-out',
				filterStore.isFilterOpen ? 'translate-x-0 shadow-[0_4px_15px_rgba(0,0,0,0.1)] md:shadow-none ' : '-translate-x-3/4'
			]"
		>
			<div class="px-5 py-5">
				<LayoutFilterButtons
					class="self-start"
					:data="candles"
					:filter-name="'Candles'"
					:filter-type="'candleType'"
					:filter-data="candleFilters"
					:handle-update-orders="handleUpdateOrders"
					:handle-reset-active-filter="handleResetActiveFilter"
					:is-filter-active="isFilterActive"
					:set-active-filter="setActiveFilter"
				/>
			</div>
			
			<Icon
				@click="toggleFilter"
				class="cursor-pointer text-black p-2 md:hidden bg-gray-100 border-l border-gray-300 rounded-r-md"
				:name="filterStore.isFilterOpen ? 'eva:arrow-left-outline' : 'eva:arrow-right-outline'"
				size="50"
			/>
		</div>

		<!-- List -->
		<div class="w-full h-full flex justify-center">
			<LayoutList :items="filteredList" />
		</div>
		<LayoutArrowOnChange class="hover:cursor-pointer hover:translate-x-2.5 transition-all duration-700 py-28"
			:title="ARROW_DATA[0].title" :icon="ARROW_DATA[0].icon" :link="ARROW_DATA[0].link"
			:size="ARROW_DATA[0].size" />
	</div>
</template>
