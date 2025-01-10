<script setup lang="ts">
import { ARROW_DATA } from "@/components/layout/arrow/arrow.data"

import { useCarousel } from '@/components/ui/carousel/useCarousel'

const { carouselApi, currentIndex, startAutoScroll, stopAutoScroll } = useCarousel()


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
	<div @mouseleave="startAutoScroll()" @mouseenter="stopAutoScroll()" class="relative">
		<NuxtImg :src="fotoUrl" class="w-full min-h-[520px] max-h-[520px] brightness-50 overflow-hidden" />
		<NuxtLink :to="url" class="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
			<div class="text-white flex flex-col items-center text-center">
				<h1
					class="text-[40px] hover:scale-110 transition-all duration-500 hover:text-[#ffcf95aa] font-base leading-10">
					{{ title }}
				</h1>
				<LayoutArrowOnChange :title="ARROW_DATA[1].title" :icon="ARROW_DATA[1].icon" :link="props.url"
					:size="ARROW_DATA[1].size" />
			</div>
		</NuxtLink>
	</div>
</template>

<style scoped>
.backflip {
	transform: rotateX(180deg) rotateZ(45deg);
}
</style>
