<script setup lang="ts">
import { defineProps } from "vue";
defineProps({
	title: {
		type: String,
		required: true,
	},
});
</script>

<template>
	<h1
		class="text-2xl text-center md:text-left sm:text-3xl md:text-4xl lg:text-5xl font-bold pl-4 sm:pl-6 md:pl-[42px] mb-6 sm:mb-8 md:mb-[45px]">
		{{ title }}
	</h1>
</template>

<style scoped>
</style>
