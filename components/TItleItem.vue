<script setup lang="ts">
import { defineProps } from "vue"
defineProps({
	title: {
		type: String,
		required: true,
	},
})
</script>

<template>
	<h1 class="text-4xl font-bold pl-[42px] mb-[45px]">{{ title }}</h1>
</template>


<style scoped></style>