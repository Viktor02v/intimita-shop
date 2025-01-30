<script setup lang="ts">
import { ARROW_DATA } from "@/components/layout/arrow/arrow.data";
import { useCarousel } from "@/components/ui/carousel/useCarousel";

const { carouselApi, currentIndex, startAutoScroll, stopAutoScroll } = useCarousel();

onMounted(() => {
	startAutoScroll();
});

onUnmounted(() => {
	stopAutoScroll();
});

const props = defineProps({
	fotoUrl: String,
	title: String,
	url: String,
});

const isHoverText = ref(false);
</script>

<template>
	<div @mouseleave="startAutoScroll()" @mouseenter="stopAutoScroll()"
		class="relative group h-[300px] sm:h-[400px] md:h-[520px]">
		<!-- Image Section -->
		<NuxtImg :src="fotoUrl" class="w-full h-full brightness-50 object-cover" />

		<!-- Overlay Content -->
		<div class="absolute inset-0 flex flex-col items-center pl-7 justify-center text-white">
			<h1
				class="text-[24px] sm:text-[32px] md:text-[40px] font-medium leading-tight hover:scale-110 transition-all duration-500 hover:text-[#ffcf95aa]">
				{{ title }}
			</h1>
			<NuxtLink :to="url" class="">
				<LayoutArrowOnChange :title="ARROW_DATA[1].title" :icon="ARROW_DATA[1].icon" :link="props.url"
					:size="ARROW_DATA[1].size" />
			</NuxtLink>
		</div>

	</div>
</template>

<style scoped>
.backflip {
	transform: rotateX(180deg) rotateZ(45deg);
}
</style>
