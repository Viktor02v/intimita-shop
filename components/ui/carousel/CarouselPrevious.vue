<script setup lang="ts">
import type { WithClassAsProps } from './interface'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

import { useCarousel } from './useCarousel'

const props = defineProps<WithClassAsProps>()

const { orientation, canScrollPrev, scrollPrev } = useCarousel()
</script>

<template>
	<Button :class="cn(
		'touch-manipulation absolute z-10 bg-transparent hover:scale-125 border-none hover:border-none shadow-none hover:bg-transparent rounded-full p-0',
		orientation === 'horizontal'
			? '-left-12 top-1/2 -translate-y-1/2'
			: '-top-12 left-1/2 -translate-x-1/2 rotate-90',
		props.class,
	)" @click="scrollPrev">
		<slot>
			<Icon name="ep:arrow-left" class="text-[40px]" />
			<span class="sr-only">Previous Slide</span>
		</slot>
	</Button>
</template>
