<script setup lang="ts">
import { defineProps } from "vue"
import type {Product} from "@/types/product.type"

defineProps<{
	item:{
		type:Product,
		required:true,
	}
}>()
</script>

<template>
	<div class="w-1/2 flex flex-col gap-10 md:gap-0 md:justify-between min-h-[700px] max-h-[700px] md:pl-[116px] py-[45px]">
		<div>
			<div class="w-full mb-[64px]">
				<h1 class="text-4xl font-light">{{ item.name }}</h1>
			</div>

			<div class="w-full">
				<p class="break-words font-light text-base">{{ item.description }}</p>
			</div>

			<div v-if="item.type === 'candle'" class="w-full relative mt-[20px] flex justify-between items-cetner">
				<p class="break-words font-light text-base">Flavor intensity</p>

				<div class="flex items-center gap-2.5">
					<div class="flex items-center gap-1">
						<button v-for="n in 5" :key="n" :class="[
							'w-[13px] h-[13px] border rounded-full transition-all duration-300',
							n <= item.flavorIntensity ? 'bg-black' : 'bg-white'
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
							{{ item.description }}
						</UiAccordionContent>
					</UiAccordionItem>
				</UiAccordion>
			</div>
		</div>

		<div class="flex items-center justify-between">
			<div class="flex flex-col mt-2">
				<p v-if="item.onSale" class="text-xl font-bold line-through text-[#979797]">
					{{ item.onSalePrice }}
				</p>
				<p class="text-xl font-bold">{{ item.price }}</p>
			</div>

			<LayoutProductAddToCartButton :item="item" />
		</div>
	</div>
</template>

<style scoped>

</style>