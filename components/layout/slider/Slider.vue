<script setup lang="ts">
import { SLIDER_DATA } from "@/components/layout/slider/slider.data"

const isActiveNext = ref(false)
const isActivePrevious = ref(false)

</script>
<template>
	<UiCarousel class="relative w-full overflow-hidden">
		<UiCarouselContent>
			<UiCarouselItem v-for="slide in SLIDER_DATA" :key="slide.foto_url">
				<LayoutSliderItem :key="slide.foto_url" :fotoUrl="slide.foto_url" :title="slide.title" :url="slide.url" />
			</UiCarouselItem>
		</UiCarouselContent>

		<UiCarouselPrevious @mouseenter="isActivePrevious = true" @mouseout="isActivePrevious = false"
			class="absolute top-1/2 left-[30px] transform -translate-y-1/2" />

		<UiCarouselNext @mouseenter="isActiveNext = true" @mouseout="isActiveNext = false"
			class="absolute z-10 top-1/2 right-[30px] transform -translate-y-1/2" />

		<transition name="fade">
			<LayoutSliderGradientPrevious v-show="isActivePrevious"
				class="absolute -left-[450px] top-1/2 -translate-y-1/2" />
		</transition>

		<transition name="fade">
			<LayoutSliderGradientNext v-show="isActiveNext" class="absolute top-1/2 -right-[450px] -translate-y-1/2" />
		</transition>


		<LayoutSliderStepper class="absolute bottom-5 left-1/2  -translate-x-1/2 " />
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