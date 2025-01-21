<script setup lang="ts">
import { ARROW_DATA } from "../arrow/arrow.data";
import { useGetCandles } from "~/composables/useGetCandles";
import { candleFilters } from "@/components/layout/filter/filters";
import { useActiveFilter } from "@/composables/useActiveFilter"
import { useFilteredList } from "@/composables/useFilteredList"

const { activeFilter,
	setActiveFilter,
	isFilterActive, } = useActiveFilter();

const {
	data: candles,
	isPending: isPendingCandles,
	isError: isErrorCandles,
} = useGetCandles();

const { filteredList, handleUpdateOrders } = useFilteredList(candles?.value);

</script>

<template>
	<div class="w-full h-full flex flex-col justify-center items-start">
		<div class="flex items-center gap-4">
			<LayoutFilterReset :data="candles ?? []" :filterName="'Perfumed'" @updateOrders="handleUpdateOrders" />
			<LayoutFilterByType v-for="filter in candleFilters" :key="filter.filterBy" :data="candles ?? []"
				:filterType="'candleType'" :filterBy="filter.filterBy" :filterName="filter.filterName"
				:isActive="isFilterActive(filter.filterBy)" @updateOrders="handleUpdateOrders"
				@setActiveFilter="setActiveFilter" />
		</div>
		<section>
			<div class="w-full h-full">
				<LayoutList :items="filteredList" />
			</div>
			<LayoutArrowOnChange class="hover:cursor-pointer hover:translate-x-2.5 transition-all duration-700 py-28"
				:title="ARROW_DATA[0].title" :icon="ARROW_DATA[0].icon" :link="ARROW_DATA[0].link"
				:size="ARROW_DATA[0].size" />
		</section>
	</div>
</template>
