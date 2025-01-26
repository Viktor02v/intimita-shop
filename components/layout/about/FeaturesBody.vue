<script setup lang="ts">
import { defineProps } from "vue"
defineProps({
	img: {
		type: String,
		required: true,
	},
	imgSecondary: {
		type: String,
	}
});
</script>

<template>
	<div class=" flex flex-col md:flex-row flex-wrap md:flex-nowrap items-center gap-8">
		<div class="w-full overflow-hidden">
			<NuxtImg :src="img" format="webp" class="w-auto h-[100vw] md:h-[30vw]" alt="'Feature image'" loading="lazy" />
		</div>
		<div class="w-full overflow-hidden">
			<NuxtImg :src="imgSecondary" format="webp" class="w-auto h-[100vw] md:h-[30vw]" alt="'Secondary feature image'"
				loading="lazy" />
		</div>
	</div>
</template>

<style scoped></style>