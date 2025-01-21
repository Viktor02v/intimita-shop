<script setup lang="ts">
import { ref, watch } from "vue";
import { ARROW_DATA } from "../arrow/arrow.data";
import { useGetSelfCare } from "~/composables/useGetSelfCare";
import { selfCareFilter } from "@/components/layout/filter/filters";
import { useActiveFilter } from "@/composables/useActiveFilter"

const { activeFilter,
	setActiveFilter,
	isFilterActive, } = useActiveFilter();

const {
	data: selfCare,
	isPending: isPendingRandom,
	isError: isErrorRandom,
} = useGetSelfCare();

const filteredList = ref<any>([]);

watch(
	() => selfCare?.value,
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
			<LayoutFilterReset :data="selfCare ?? []" :filterName="'Self care'" @updateOrders="handleUpdateOrders" />
			<LayoutFilterByType v-for="filter in selfCareFilter" :key="filter.filterBy" :data="selfCare ?? []"
				:filterBy="filter.filterBy" :filterName="filter.filterName" :filterType="'selfCareType'"
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
