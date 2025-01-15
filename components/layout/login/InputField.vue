<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

// Define props for type, placeholder, and modelValue (which is used for v-model)
const props = defineProps({
	type: {
		type: String,
		required: true,
	},
	placeholder: {
		type: String,
		required: true,
	},
	modelValue: {
		type: String,
		required: true,
	},
});

const emit = defineEmits(['update:modelValue']);

function handleInput(event: Event) {
	const input = event.target as HTMLInputElement;
	emit('update:modelValue', input.value);
}
</script>

<template>
	<!-- Bind the value to modelValue and listen for input changes -->
	<UiInput :type="props.type" :placeholder="props.placeholder" :v-model="props.modelValue" @input="handleInput"
		class="input"/>
</template>

<style scoped>
.input {
	@apply mb-4 placeholder:text-gray-300 placeholder:text-[12px] text-black border-b border-gray-300 focus-visible:ring-0 focus:outline-none;
}
</style>
