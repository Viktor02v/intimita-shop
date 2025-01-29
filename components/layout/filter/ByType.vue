<script setup lang="ts">
import type { PropType } from 'vue'

const { filterValues } = useSidebarFilter()

const emit = defineEmits<{
	(e: 'updateOrders', value: unknown[]): void
	(e: 'setActiveFilter', value: string): void
}>()

const props = defineProps({
	data: {
		type: Array as PropType<unknown[]>,
		required: true,
		default: () => []
	},
	filterBy: {
		type: String,
		required: true
	},
	filterName: {
		type: String,
		required: true
	},
	filterType: {
		type: String,
		required: true
	},
	isActive: {
		type: Boolean,
		default: false
	}
})

const filteredOrders = ref<unknown[]>([])

// Consolidated watcher for both data and filter changes
watchEffect(() => {
	if (!props.data?.length || !props.filterType) {
		filteredOrders.value = []
		emit('updateOrders', [])
		return
	}

	// Use composable filter value or fallback to prop filter
	const activeFilter = filterValues.value || props.filterBy

	filteredOrders.value = props.data.filter(item =>
		(item as Record<string, unknown>)[props.filterType] === activeFilter
	)

	emit('updateOrders', filteredOrders.value)
})

const onFilterClick = () => {
	if (!props.filterType || !props.filterBy) {
		console.warn('Missing filter criteria')
		return
	}

	// Update global filter state
	filterValues.value = props.filterBy
	emit('setActiveFilter', props.filterBy)
}
</script>

<template>
	<div class="w-full md:w-[90%] flex flex-col md:justify-end md:items-end md:gap-8">
		<div class="flex flex-col md:flex-row justify-center items-center py-2 md:py-8">
			<UiButton :class="[
				'w-[35vw] md:w-[150px] text-black text-[13px] font-light cursor-pointer',
				'bg-white shadow-lg rounded-3xl border border-gray-500',
				'transition-colors duration-200',
				{
					'bg-black text-[#FFD095]': isActive,
					'hover:bg-black hover:text-[#FFD095]': !isActive
				}
			]" @click="onFilterClick" :aria-pressed="isActive">
				{{ props.filterName }}
			</UiButton>
		</div>
	</div>
</template>