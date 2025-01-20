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

watch(
  () => productsInCart.value,

  (newData) => {
    if (Array.isArray(newData)) {
      newData.forEach((product) => {
			cartMap.value[product.$id] = true;
      });
    }
  },
  { immediate: true }
);
</script>

<template>
	<button v-if="props.item" @click.prevent="toggleCartMutation.mutate(props.item)"
		class="absolute right-[22px] text-[25px] bottom-[10px]" type="button">
		<Icon :name="props.item && checkIsInCart(props.item?.$id)
				? 'lsicon:minus-filled'
				: 'gala:add'
			" />
	</button>
</template>

<style scoped>

</style>
