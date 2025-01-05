<script setup lang="ts">
import { defineProps } from "vue"
defineProps({
	product: {
		type: Object,
		required: true
	}
})
</script>

<template>
	<div class="w-full flex items-center min-h-[700px] max-h-[700px] pr-10">
		<!-- Image Section -->
		<LayoutProductImageSection :img="product?.foto_url" />

		<!-- Content Section -->
		<LayoutProductContentSection :name="product?.name" :description="product?.description"
			:flavor-intensity="product?.flavorIntensity" :type="product?.type" :price="product?.price"
			:on-sale="product?.isOnSale" :on-sale-price="product?.onSalePrice" />
	</div>

</template>

<style scoped>

</style>