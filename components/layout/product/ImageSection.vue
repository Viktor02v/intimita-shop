<script setup lang="ts">
import { defineProps } from "vue"
defineProps({
	img: {
		type: String,
		required: true
	}
})
</script>

<template>
	<div
		class="w-1/2 flex shadow-[0_4px_15px_rgba(0,0,0,0.1)] items-center border rounded justify-center min-h-[400px] md:min-h-[700px] max-h-[700px]">
		<div class=" flex  items-center justify-center w-[600px] h-[600px]">
			<NuxtImg :src="img" class="w-[80%] md:w-full h-full object-contain" alt="Product Image" />
		</div>
	</div>
</template>

<style scoped></style>