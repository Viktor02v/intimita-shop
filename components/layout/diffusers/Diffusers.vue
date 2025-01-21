<script setup lang="ts">
import { ref, watch } from "vue";
import { ARROW_DATA } from "../arrow/arrow.data";
import { useGetDiffusers } from "~/composables/useGetDiffusers";
import { diffuserFilter } from "@/components/layout/filter/filters";
import { useActiveFilter } from "@/composables/useActiveFilter"

const { activeFilter,
	setActiveFilter,
	isFilterActive, } = useActiveFilter();

const {
	data: diffusers,
	isPending: isPendingRandom,
	isError: isErrorRandom,
} = useGetDiffusers();

const filteredList = ref<any>([]);

watch(
	() => diffusers?.value,
	(newData) => {
		if (newData) {
			filteredList.value = [...newData];
		}
	},
	{ immediate: true }
);

const handleUpdateOrders = (updatedOrders: any) => {
	filteredList.value = updatedOrders;
};
</script>

<template>
	<div class="w-full h-full flex flex-col justify-center items-start">
		<div class="flex items-center gap-4">
			<LayoutFilterReset :data="diffusers ?? []" :filterName="'Diffusers'" @updateOrders="handleUpdateOrders" />
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

<style scoped></style>
