<script setup lang="ts">
import { useFilterStore } from '@/store/filter.store';

const filterStore = useFilterStore();

const toggleFilter = () => {
	filterStore.isFilterOpen = !filterStore.isFilterOpen;
};
</script>

<template>
	<div :class="[
		'flex items-center bg-white rounded-md md:bg-inherit md:self-start z-30 fixed md:relative top-[25%] left-0 md:left-auto  md:top-0 transform md:transform-none transition-transform duration-500 ease-in-out',
		filterStore.isFilterOpen ? 'translate-x-0 md:translate-x-0 shadow-[0_4px_15px_rgba(0,0,0,0.1)] md:shadow-none' : '-translate-x-3/4 md:-translate-x-0'
	]">
		<div class="py-5 px-5 md:px-0 md:pt-0">
			<slot name="buttons" />
		</div>

		<Icon @click="toggleFilter"
			class="cursor-pointer text-black p-2 md:hidden border-l border-gray-300 rounded-r-md"
			:name="filterStore.isFilterOpen ? 'eva:arrow-left-outline' : 'eva:arrow-right-outline'" size="50" />
	</div>
</template>
