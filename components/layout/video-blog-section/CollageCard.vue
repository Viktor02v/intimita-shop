<script setup lang="ts">
import { defineProps, ref } from "vue";

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
	return isHover.value
		? "brightness-50 scale-110 transition-all ease-in-out duration-500"
		: "brightness-75 scale-100 transition-all ease-in-out duration-500";
};
</script>

<template>
	<div
		class="relative group"
		@mouseover="isHover = true"
		@mouseleave="isHover = false"
	>
		<NuxtLink :to="url" class="block w-full h-full">
			<!-- Centered Text -->
			<div
				class="flex flex-col justify-center items-center gap-2 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center"
			>
				<div
					class="font-garamond text-[18px] sm:text-[22px] md:text-[28px] font-bold hover:text-[#FFD095] transition-all duration-500"
				>
					{{ props.title }}
				</div>
				<div
					class="flex items-center justify-center gap-2 text-[12px] sm:text-[14px] hover:text-[#FFD095] transition-all duration-500"
					@mouseover="isHoverText = true"
					@mouseleave="isHoverText = false"
				>
					<div>{{ props.subtitle }}</div>
					<Icon
						:name="props.icon"
						size="16"
						class="-rotate-15 transition-all duration-1000"
						:class="isHoverText ? 'text-[#FFD095] backflip' : ''"
					/>
				</div>
			</div>
			<!-- Video Section -->
			<div
				class="w-full max-w-[90vw] sm:max-w-[70vw] md:max-w-[50vw] lg:max-w-[45vw] h-auto max-h-[40vh] sm:max-h-[45vh] overflow-hidden mx-auto"
			>
				<video
					:src="props.video_url"
					muted
					autoplay
					loop
					class="w-full h-auto hover:scale-110 transition-all duration-700 transform"
					:class="onBrightness()"
					loading="lazy"
				/>
			</div>
		</NuxtLink>
	</div>
</template>

<style scoped>
.backflip {
	transform: rotateX(180deg) rotateZ(45deg);
}
</style>
