<script setup lang="ts">
import { useAppwriteUser } from "@/components/layout/cart/useAppwriteUser";
import { useGetCartProducts } from "@/composables/useGetCartProducts";
import { useSidebarStore } from "@/store/sidebar.store";
import { computed } from "vue";

const sidebarStore = useSidebarStore();

const {
	data: cartProducts = [],
	isPending: isPendingCartProducts,
	isError: isErrorCartProducts,
} = useGetCartProducts();

const { user, isLoading, error } = useAppwriteUser();

const cartClasses = computed(() =>
	sidebarStore.isCartOpen
		? "translate-x-0 duration-1000 opacity-100"
		: "translate-x-full duration-1000 opacity-100"
);

const goTo = () => {
	sidebarStore.toggleCartOpen();
	sidebarStore.toggleLoginOpen();
};

</script>


<template>
	<div id="cart" role="dialog" aria-labelledby="cart-title" :aria-hidden="!sidebarStore.isCartOpen" :class="[
		'fixed top-[120px] right-0 h-[57.7vh] w-[34vw] bg-white flex flex-col z-50 py-6',
		cartClasses,
	]">

		<LayoutOrder :items="cartProducts" />

		<LayoutOrderComplete />

		<!-- Header -->
		<h1 id="cart-title" class="font-light text-center mb-[43px] text-[32px]">
			Cart
		</h1>

		<!-- Loading State -->
		<div v-if="isPendingCartProducts" class="uppercase text-center text-base font-light">
			Loading...
		</div>

		<!-- Error State -->
		<div v-if="isErrorCartProducts" class="uppercase text-center text-base font-light text-red-500">
			Error loading cart. Please try again.
		</div>

		<!-- Cart Items -->
		<div v-if="cartProducts && cartProducts?.length > 0 && user" class="w-full flex flex-col space-y-[50px]">
			<LayoutCartItem :items="cartProducts" />
			<LayoutCartButtons />
		</div>

		<!-- Not Logged In -->
		<div @click="goTo" v-else-if="!user"
			class="uppercase cursor-pointer text-base flex justify-center items-end space-x-2 font-light">
			<p>Log in Or Registrate</p>
			<Icon name="mdi-light:arrow-right" size="30" />
		</div>

		<!-- Empty Cart -->
		<div v-else class="uppercase text-center text-base space-x-2 font-light">
			Your cart is empty
		</div>
	</div>
</template>


<style scoped></style>
