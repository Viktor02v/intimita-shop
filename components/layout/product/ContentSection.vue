<script setup lang="ts">
import { defineProps } from "vue"
defineProps({
	name: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	type: {
		type: String,
		required: true
	},
	flavorIntensity: {
		type: Number,
		required: true
	},
	onSale: {
		type: Boolean,
		required: true
	},
	onSalePrice: {
		type: Number,
		required: true
	},
	price: {
		type: Number,
		required: true
	},
})
</script>

<template>
	<div class="w-1/2 flex flex-col justify-between min-h-[700px] max-h-[700px] pl-[116px] py-[45px]">
		<div>
			<div class="w-full mb-[64px]">
				<h1 class="text-4xl font-light">{{ name }}</h1>
			</div>

			<div class="w-full">
				<p class="break-words font-light text-base">{{ description }}</p>
			</div>

			<div v-if="type === 'candle'" class="w-full relative mt-[20px] flex justify-between items-cetner">
				<p class="break-words font-light text-base">Flavor intensity</p>

				<div class="flex items-center gap-2.5">
					<div class="flex items-center gap-1">
						<button v-for="n in 5" :key="n" :class="[
							'w-[13px] h-[13px] border rounded-full transition-all duration-300',
							n <= flavorIntensity ? 'bg-black' : 'bg-white'
						]">
						</button>
					</div>
				</div>
			</div>

			<div class="mt-[27px]">
				<UiAccordion type="single" collapsible>
					<UiAccordionItem value="item-1">
						<UiAccordionTrigger>Description</UiAccordionTrigger>
						<UiAccordionContent class="text-base font-medium break-words">
							{{ description }}
						</UiAccordionContent>
					</UiAccordionItem>
				</UiAccordion>
			</div>
		</div>

		<div class="flex items-center justify-between">
			<div class="flex flex-col mt-2">
				<p v-if="onSale" class="text-xl font-bold line-through text-[#979797]">
					{{ onSalePrice }}
				</p>
				<p class="text-xl font-bold">{{ price }}</p>
			</div>
			<div class="">
				<button class=" border hover:text-white hover:bg-black transition-all duration-200 rounded-full text-[15px] border-[#000000] font-medium py-[12px] px-[55px]"
					type="button">
					Add to Cart
				</button>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>