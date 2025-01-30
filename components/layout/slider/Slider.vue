<script setup lang="ts">
import { SLIDER_DATA } from "@/components/layout/slider/slider.data";
import { useScreenSize } from "@/composables/useWindowSize"
const isActiveNext = ref(false);
const isActivePrevious = ref(false);

const { isMobile } = useScreenSize();

const slides = ref(SLIDER_DATA || []);
</script>

<template>
	<UiCarousel :class="[isMobile ? 'z-10' : 'z-40', 'relative  w-full overflow-hidden']">
		<!-- Carousel Content -->
		<UiCarouselContent>
			<UiCarouselItem v-for="(slide, index) in slides" :key="`${slide.title}-${index}`">
				<LayoutSliderItem :fotoUrl="slide.foto_url" :title="slide.title" :url="slide.url" />
			</UiCarouselItem>
		</UiCarouselContent>

		<!-- Previous Button -->
		<UiCarouselPrevious @mouseenter="isActivePrevious = true" @mouseout="isActivePrevious = false"
			class="absolute top-1/2 left-4 sm:left-6 lg:left-[30px] transform -translate-y-1/2" />

		<!-- Next Button -->
		<UiCarouselNext @mouseenter="isActiveNext = true" @mouseout="isActiveNext = false"
			class="absolute z-10 top-1/2 right-4 sm:right-6 lg:right-[30px] transform -translate-y-1/2" />

		<!-- Gradient Transitions -->
		<transition name="fade">
			<LayoutSliderGradientPrevious v-show="isActivePrevious"
				class="absolute -left-[150px] sm:-left-[300px] lg:-left-[450px] top-1/2 -translate-y-1/2" />
		</transition>

		<transition name="fade">
			<LayoutSliderGradientNext v-show="isActiveNext"
				class="absolute top-1/2 -right-[150px] sm:-right-[300px] lg:-right-[450px] -translate-y-1/2" />
		</transition>

		<!-- Stepper -->
		<LayoutSliderStepper class="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2" />
	</UiCarousel>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.2s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
