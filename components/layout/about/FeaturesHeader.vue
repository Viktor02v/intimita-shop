<script setup lang="ts">
import { defineProps } from "vue"

defineProps({
	title: {
		type: String,
		required: true,
	},
	content: {
		type: String,
		required: true,
	},
	secondaryContent: {
		type: String,
	},
});
</script>

<template>
	<div class="w-full flex flex-col space-y-8 items-center justify-center px-6 md:px-12">
		<h2 class="text-lg md:text-2xl break-words uppercase font-bold">{{ title }}</h2>
		<p class="text-sm md:text-base text-center">{{ content }}</p>
		<p v-if="secondaryContent" class="text-sm md:text-base text-center">{{
			secondaryContent }}</p>
	</div>
</template>

<style scoped></style>