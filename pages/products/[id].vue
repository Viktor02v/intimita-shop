<script setup lang="ts">
import { useGetProduct } from "@/composables/useGetProduct"
import { useGetRandomProducts } from "~/composables/useGetRandomProducts"

const route = useRoute();

const productId = route.params.id;

const { data: product, isPending: isPendingProduct, isError: isErrorProduct } = useGetProduct(productId);

const { data: randomProducts, isPending: isPendingRandom, isError: isErrorRandom } = useGetRandomProducts();


</script>

<template>
	<div class="w-full py-[59px]">
		<div class="px-[15px] flex flex-col gap-[180px]">
			<div>
				<LayoutProductCard v-if="product" :product="product" />
				<p v-else-if="isPendingProduct">Loading...</p>
				<p v-else-if="isErrorProduct">Error loading product.</p>
			</div>

			<div class="md:px-[100px] pb-[70px]">
				<TItleItem title="Similar products"/>
				<LayoutList v-if="randomProducts" :items="randomProducts" />
				<p v-else-if="isPendingRandom">Loading...</p>
				<p v-else-if="isErrorRandom">Error loading product.</p>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>