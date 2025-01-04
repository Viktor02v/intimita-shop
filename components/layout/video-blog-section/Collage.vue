<template>
	<div class="py-[43px]">
		<div class="pl-[120px]">
			<TItleItem :title="title" />
		</div>
		<LayoutVideoBlogSectionCollageSection />
	</div>
</template>

<script setup lang="ts">
defineProps({
	title: {
		type: String,
		required: true,
	},
});
</script>

<style scoped></style>
