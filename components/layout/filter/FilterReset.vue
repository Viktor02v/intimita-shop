<script setup lang="ts">
import { ref, defineEmits, defineProps, watch } from "vue";

const emit = defineEmits(["updateOrders", "resetActiveFilter"]);

const onOpen = ref(false);

const props = defineProps<{
	data: any[];
	filterName: string;
}>();

watch(
	() => props.data,
	(newOrders, oldOrders) => { },
	{ immediate: true }
);

const resetFilter = () => {
	const sortedOrders = [...props.data].sort((a, b) => {
		const dateA = new Date(a.$createdAt);
		const dateB = new Date(b.$createdAt);
		return dateB.getTime() - dateA.getTime();
	});

	// Emit reset event to update orders
	emit("updateOrders", sortedOrders);

	// Emit reset active filter event to parent component
	emit("resetActiveFilter");

	onOpen.value = false;
};
</script>

<template>
	<section class="w-[90%] flex flex-col justify-end items-end gap-8">
		<!-- Toggle Button -->
		<div class="flex items-center py-8">
			<buttonn class="text-[36px] cursor-pointer font-garamond min-w-[10vw]" @click="resetFilter">{{ props.filterName
				}}</buttonn>
		</div>
	</section>
</template>
