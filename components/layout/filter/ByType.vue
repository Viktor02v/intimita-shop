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
	<div class="w-[100%] md:w-[90%] flex flex-col md:justify-end md:items-end md:gap-8">
		<div class="flex flex-col md:flex-row justify-center items-center py-2 md:py-8">
			<UiButton :class="[
				'w-[35vw] md:w-[150px] text-[13px] font-light cursor-pointer bg-white shadow-lg rounded-3xl border border-gray-500',
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
