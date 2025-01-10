<script setup lang="ts">
import { SLIDER_DATA } from "@/components/layout/slider/slider.data"
import { useCarousel } from '@/components/ui/carousel/useCarousel'

const { carouselApi, currentIndex, startAutoScroll, stopAutoScroll } = useCarousel()


function goToSlide(index: number) {
	carouselApi.value?.scrollTo(index)
}

onMounted(() => {
  startAutoScroll(); 
});

const slides = ref(SLIDER_DATA || []); 
</script>

<template>
	<div class="flex gap-[20px]">
		<button  v-for="(slide, index) in slides" :key="`${slide.title}-${index}`" @click="goToSlide(index)" :class="{
			'w-[10px] h-[10px] border rounded-full transition-all duration-300': true,
			'bg-white': index === currentIndex 
		}"></button>
	</div>
</template>

<style scoped>

</style>
