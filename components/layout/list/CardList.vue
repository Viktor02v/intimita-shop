<script setup lang="ts">

defineProps({
	item: Object,
	required: true,
})
</script>
<template>
	<div
		class="shadow-[0_4px_15px_rgba(0,0,0,0.1)] relative rounded min-w-[240px] min-h-[360px] p-[25px] flex flex-col items-center">

		<LayoutListCardItem :item="item"/>

		<LayoutListOnSaleItem v-if="item.isOnSale" />

		<LayoutListFavoriteButton/>

		<LayoutListAddToCartButton/>
	</div>
</template>

<style scoped>

</style>