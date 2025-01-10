<script setup lang="ts">
import { defineProps, ref, onMounted } from "vue";
import type { Product } from "~/types/product.type";
import { useCartMutation } from "@/composables/useCheckCart";
import { useAddToCart } from "@/composables/useAddToCart"
import { useGetCartProducts } from "@/composables/useGetCartProducts";

const props = defineProps({
	item: {
		type: Object as () => Product,
		required: true,
	},
});

const { toggleCartMutation, cartMap } = useCartMutation();
const { data: productsInCart = ref([]) } = useGetCartProducts();
const { checkIsInCart } = useAddToCart();

onMounted(() => {
	if (Array.isArray(productsInCart.value)) {
		productsInCart.value.forEach((product) => {
			cartMap.value[product.$id] = true;
		});
	}
});
</script>

<template>
	<button v-if="props.item" @click.prevent="toggleCartMutation.mutate(props.item)"
		:class="[checkIsInCart(props.item.$id) ? 'bg-black text-white hover:bg-white hover:text-[#000000]':'', 'border hover:text-white hover:bg-black transition-all duration-200 rounded-full text-[15px] border-[#000000] font-medium py-[12px] px-[55px]']"
		type="button">
		{{ checkIsInCart(props.item.$id) ? 'Remove from Cart' : 'Add to Cart' }}
	</button>
</template>

<style scoped>

</style>