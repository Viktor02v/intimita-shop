<script setup lang="ts">
import { defineProps } from "vue"
defineProps({
	data: {
		type: Object ?? [],
	},
	filterName: {
		type: String
	},
	filterData: {
		type: Object
	},
	filterType: {
		type: String
	},
	handleUpdateOrders: {
		type: Function,
		required: true,
	},
	handleResetActiveFilter: {
		type: Function,
		required: true,
	},
	isFilterActive: {
		type: Function,
		required: true,
	},
	setActiveFilter: {
		type: Function,
		required: true,
	}
})
</script>

<template>
	<div class="flex flex-col md:flex-row items-center md:gap-4">
		<LayoutFilterReset :data="data" :filterName="filterName" @updateOrders="handleUpdateOrders"
			@resetActiveFilter="handleResetActiveFilter" />
		<LayoutFilterByType v-for="filter in filterData" :key="filter.filterBy" :data="data" :filterType="filterType"
			:filterBy="filter.filterBy" :filterName="filter.filterName" :isActive="isFilterActive(filter.filterBy)"
			@updateOrders="handleUpdateOrders" @setActiveFilter="setActiveFilter" />
	</div>
</template>