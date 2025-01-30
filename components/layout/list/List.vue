<script setup lang="ts">
defineProps({
	items: {
		type: Object,
		required: true,
	},
});
</script>

<template>
	<div
		class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full gap-6 md:gap-8 lg:gap-[50px] justify-items-center z-10">
		<div v-for="item in items" :key="item.$id" class="flex justify-center">
			<LayoutListCardList :item="item" />
		</div>
	</div>
</template>

<style scoped>

</style>
