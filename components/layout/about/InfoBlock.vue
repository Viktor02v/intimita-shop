<script setup lang="ts">
import { defineProps } from "vue"

defineProps({
	view: {
		type: Boolean,
		default: false,
	},
	img: {
		type: String,
	},
	imgBackup: {
		type: String,
	},
	title: {
		type: String,
		required: true,
	},
	content: {
		type: String,
		required: true,
	},
	secondaryContent: {
		type: String,
	},

});
</script>

<template>
	<LayoutAboutFlexibleBlock :reverse="view">
		<!-- Foto Block -->
		<template #foto-block>
			<NuxtImg :src="img" class="object-cover w-full h-full" :alt="imgBackup" loading="lazy"/>
		</template>
		<!-- Content Block -->
		<template #content-block>
			<div class="px-[80px] flex flex-col space-y-[30px]">
				<h2 class="text-2xl text-center md:text-left md:break-words  uppercase font-bold">{{ title }}</h2>
				<p class="text-[15px] text-format">{{ content }}</p>
				<p v-if="secondaryContent" class="text-[15px]">
					{{ secondaryContent }}
				</p>
			</div>
		</template>
	</LayoutAboutFlexibleBlock>
</template>

<style scoped>
.text-format {
  white-space: pre-wrap;
}
</style>