<script setup lang="ts">
import { ARROW_DATA } from "../arrow/arrow.data";
import { useGetProducts } from "~/composables/useGetProducts";
import { selfCareFilter } from "@/components/layout/filter/filters";
import { useFilter } from '~/composables/useFilter';

const { data: selfCare, isPending: isPending, isError: isError } = useGetProducts("self-care");

const {
	filteredList,
	handleUpdateOrders,
	activeFilter,
	setActiveFilter,
	isFilterActive,
	handleResetActiveFilter,
	filters,
	filterName
} = useFilter(selfCare, selfCareFilter, 'Self care');
</script>


<template>
	<div class="w-full relative h-full flex flex-col justify-center py-20 items-end md:items-center">
		<LayoutMobileFilter>
			<template #buttons>
				<LayoutFilterButtons :data="selfCare" :filter-name="'Self care'" :filter-type="'selfCareType'"
					:filter-data="selfCareFilter" :handle-update-orders="handleUpdateOrders"
					:handle-reset-active-filter="handleResetActiveFilter" :is-filter-active="isFilterActive"
					:set-active-filter="setActiveFilter" />
			</template>
		</LayoutMobileFilter>

		<!-- List -->
		<div class="w-full h-full flex justify-center">
			<LayoutList :items="filteredList" />
		</div>
		<LayoutArrowOnChange class="hover:cursor-pointer hover:translate-x-2.5 transition-all duration-700 py-28"
			:title="ARROW_DATA[0].title" :icon="ARROW_DATA[0].icon" :link="ARROW_DATA[0].link"
			:size="ARROW_DATA[0].size" />
	</div>
</template>
