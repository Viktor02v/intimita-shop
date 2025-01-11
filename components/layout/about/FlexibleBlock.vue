<script setup lang="ts">
import { defineProps } from "vue"

defineProps({
	reverse: {
		type: Boolean,
		default: false,
	},
});
</script>

<template>
	<div :class="[
		'w-full flex items-center',
		reverse ? 'flex-row-reverse' : 'flex-row',
	]">
		<!-- Foto Block -->
		<div class="w-1/2 h-[100vh]">
			<slot name="foto-block" />
		</div>

		<!-- Content Block -->
		<div class="w-1/2">
			<slot name="content-block" />
		</div>
	</div>
</template>

<style scoped>

</style>
