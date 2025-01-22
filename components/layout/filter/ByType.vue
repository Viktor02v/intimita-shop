<script setup lang="ts">
import { ref, onMounted, watch, defineEmits, defineProps } from "vue";

const emit = defineEmits(["updateOrders", "setActiveFilter"]);

// Props
const props = defineProps<{
	data: any[];
	filterBy: string;
	filterName: string;
	filterType: string;
	isActive: boolean;
}>();


// Filter functions
const onFilterClick = () => {
	const filteredOrders = props.data.filter((item) => item[props.filterType] === props.filterBy);
	emit("updateOrders", filteredOrders);
	emit("setActiveFilter", props.filterBy); // Notify parent to set active filter
};


// Check if the orders are received correctly
onMounted(() => {
	console.log("Mounted orders:", props.data); // Check if orders are passed from the parent
});
</script>

<template>
	<div class="w-[90%] flex flex-col justify-end items-end gap-8">
		<div class="flex items-center space-5 py-8">
			<UiButton :class="[
				'w-[150px] text-[13px] font-light cursor-pointer bg-white shadow-lg rounded-3xl border border-gray-500',
				isActive
					? 'bg-black text-[#FFD095]'
					: 'bg-white text-black hover:bg-black hover:text-[#FFD095]'
			]" @click="onFilterClick">
				{{ props.filterName }}
			</UiButton>
		</div>
	</div>
</template>

<style scoped>
/* Add your custom styles here */
</style>
