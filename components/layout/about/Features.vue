<script setup lang="ts">
import { defineProps } from "vue"
import type { BlockFeature } from "./about.data";

defineProps<{
	data: BlockFeature[];
}>();
</script>

<template>
	<div v-if="data.length && data[0]" class="w-full flex flex-col gap-36 items-center justify-center mb-24">
		<!-- Header -->
		<LayoutAboutFeaturesHeader :title="data[0].title" :content="data[0].content"
			:secondary-content="data[0].secondary_content" />

		<!-- Body -->
		<LayoutAboutFeaturesBody :img="data[0].foto_url" :img-secondary="data[0].foto_secondary"/>
	</div>
</template>

<style scoped>

</style>