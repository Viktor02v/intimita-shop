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
	<div class="w-1/2 shadow-[0_4px_15px_rgba(0,0,0,0.1)] border rounded min-h-[400px] md:min-h-[700px] max-h-[700px] relative">
		<div class="absolute inset-0 flex items-center justify-center p-4">
			<NuxtImg 
				:src="img" 
				class="w-1/2 h-1/2 object-contain"
				style="transform: translateZ(0)" 
				alt="Product Image"
			/>
		</div>
	</div>
</template>

<style scoped></style>