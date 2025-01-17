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
	<UiButton :type="props.type" class="w-full rounded-2xl bg-black text-white hover:text-[#FFD095] hover:bg-black transition-all duration-300 font-light text-[15px] ">
		<slot />
	</UiButton>
</template>

<style scoped></style>
