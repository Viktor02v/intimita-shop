<script setup lang="ts">
import { ARROW_DATA } from "../arrow/arrow.data";
import { useGetDiffusers } from "~/composables/useGetDiffusers";
import { diffuserFilter } from "@/components/layout/filter/filters";
import { useFilter } from '~/composables/useFilter';

const {
	data: diffusers,
	isPending: isPendingRandom,
	isError: isErrorRandom,
} = useGetDiffusers();

const {
	filteredList,
	handleUpdateOrders,
	activeFilter,
	setActiveFilter,
	isFilterActive,
	handleResetActiveFilter,
	filters,
	filterName
} = useFilter(diffusers, diffuserFilter, 'Diffusers');
</script>

<template>
	<div class="w-full h-full flex flex-col justify-center items-start">
		<div class="flex items-center gap-4">
			<LayoutFilterReset :data="diffusers ?? []" :filterName="'Diffusers'" @updateOrders="handleUpdateOrders"
			@resetActiveFilter="handleResetActiveFilter" />
			<LayoutFilterByType v-for="filter in diffuserFilter" :key="filter.filterBy" :data="diffusers ?? []"
				:filterBy="filter.filterBy" :filterName="filter.filterName" :filterType="'diffusersType'"
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

