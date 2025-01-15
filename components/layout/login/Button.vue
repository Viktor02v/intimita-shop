<!-- BaseButton.vue -->
<script setup lang="ts">
import { defineProps } from "vue";


const props = defineProps({
	type: {
		type: String,
		default: "button",
	},
});

</script>

<template>
	<div>
		<UiButton :type="props.type" class="w-full bg-black text-white rounded-2xl hover:bg-gray-700">
			<slot />
		</UiButton>
	</div>
</template>

<style scoped></style>
