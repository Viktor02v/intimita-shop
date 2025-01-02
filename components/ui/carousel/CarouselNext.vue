<script setup lang="ts">
import type { WithClassAsProps } from './interface'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useCarousel } from './useCarousel'

const props = defineProps<WithClassAsProps>()

const { orientation, canScrollNext, scrollNext } = useCarousel()
</script>

<template>
		<Button  :class="cn(
			'touch-manipulation absolute bg-transparent hover:scale-125 border-none hover:border-none shadow-none hover:bg-transparent rounded-full p-0',
			orientation === 'horizontal'
				? '-right-12 top-1/2 -translate-y-1/2'
				: '-bottom-12 left-1/2 -translate-x-1/2 rotate-90',
			props.class,
		)" @click="scrollNext">
			<slot>
				<Icon name="ep:arrow-right" class="text-[40px]" />
				<span class="sr-only">Next Slide</span>
			</slot>
		</Button>
</template>

<style scoped></style>