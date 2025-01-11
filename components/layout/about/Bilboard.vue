<script setup lang="ts">
import { defineProps } from "vue"

defineProps({
	img: {
		type: String,
		required: true,
	},
	imgBackup: {
		type: String,
		required: true,
	},
});
</script>

<template>
	<div class="w-full  mt-[50px] mb-[100px]">
		<NuxtImg :src="img" class="w-[100vw] h-[90vh] max-h-[1600px] max-w-[2866px] object-cover mx-auto"
			:alt="imgBackup" loading="lazy" />
	</div>
</template>

<style scoped>

</style>