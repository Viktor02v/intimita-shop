<script setup lang="ts">
import { defineProps } from "vue";
import { ref } from "vue";

const props = defineProps({
	title: {
		type: String,
		required: true,
	},
	subtitle: {
		type: String,
		required: true,
	},
	icon: {
		type: String,
		required: true,
	},
	video_url: {
		type: String,
		required: true,
	},
	url: {
		type: String,
		required: true,
	},
});

const isHover = ref(false);
const isHoverText = ref(false);

const onBrightness = () => {
	if (isHover.value) {
		return "brightness-50 transition-all ease-in-out duration-500";
	}
	return "brightness-75 contrast-100 transition-all ease-in-out duration-500";
};
</script>

<template>
	<div class="relative group" @mouseover="isHover = true" @mouseleave="isHover = false">
		<NuxtLink :to="url" class="w-full h-full">

			<!-- Text Section -->
			<div
				class="flex flex-col justify-center items-center gap-2 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4 z-10">
				<div
					class="font-garamond text-center text-[18px] md:text-[24px] font-bold hover:text-[#FFD095] transition-all duration-500">
					{{ props.title }}
				</div>
				<div
					class="w-full h-full flex items-center justify-center gap-2 text-[12px] md:text-[14px] hover:text-[#FFD095] transition-all duration-500"
					@mouseover="isHoverText = true" @mouseleave="isHoverText = false">
					<div class="text-[12px] md:text-[14px]">
						{{ props.subtitle }}
					</div>
					<Icon :name="props.icon" size="18" class="-rotate-15 transition-all duration-1000"
						:class="isHoverText ? 'text-[#FFD095] backflip' : ''" />
				</div>
			</div>

			<!-- Full-width Image -->
			<div class="w-full h-[300px] md:h-[400px] overflow-hidden">
				<img :src="props.video_url" class="w-full h-full object-cover transition-all duration-700"
					:class="onBrightness()" alt="Blog Image" />
			</div>
		</NuxtLink>
	</div>
</template>

<style scoped>
.backflip {
	transform: rotateX(180deg) rotateZ(45deg);
}
</style>
