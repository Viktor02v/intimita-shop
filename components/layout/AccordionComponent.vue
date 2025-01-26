<script setup lang="ts">
import {
	ACCORDION_ONE_DATA,
	ACCORDION_TWO_DATA,
	ACCORDION_THREE_DATA,
	ACCORDION_FOUR_DATA,
	ACCORDION_TITLES,
} from "@/components/ui/accordion/accordion.data";
</script>

<template>
	<div class="max-w-[90vw] lg:max-w-[83vw] mx-auto my-[50px] lg:my-[87px] px-4 sm:px-6">
		<TItleItem :title="ACCORDION_TITLES[0].title" />
		<UiAccordion type="single" class="w-full mt-[30px] lg:mt-[45px]" collapsible>
			<!-- Loop through all accordion data arrays -->
			<UiAccordionItem v-for="(item, index) in [
				...ACCORDION_ONE_DATA,
				...ACCORDION_TWO_DATA,
				...ACCORDION_THREE_DATA,
				...ACCORDION_FOUR_DATA
			]" :key="item.title + index" :value="item.title">
				<UiAccordionTrigger>{{ item.title }}</UiAccordionTrigger>
				<UiAccordionContent>
					{{ item.description }}
				</UiAccordionContent>
			</UiAccordionItem>
		</UiAccordion>
	</div>
</template>

<style scoped></style>
