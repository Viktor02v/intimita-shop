<script setup lang="ts">
import { useAppwriteUser } from "@/components/layout/cart/useAppwriteUser";
import { useGetCartProducts } from "@/composables/useGetCartProducts";
import { useGetFavoriteProducts } from "@/composables/useGetFavoriteProducts";
import { toggleSidebar } from "@/composables/useToggleSidebar";
import { useSidebarStore } from "@/store/sidebar.store";
import { useGetAllProducts } from "@/composables/useGetAllProducts";
import { useSearchStore } from "@/store/search.store";
import { useCloseSidebarIfOpen } from "~/composables/useCloseSidebarIfOpen";

const { closeSidebarIfOpen } = useCloseSidebarIfOpen();

// Stores
const onSearchStore = useSearchStore();
const sidebarStore = useSidebarStore();

// Fetching data
const { data: cartProducts = [] } = useGetCartProducts();
const { data: favoriteProducts = [] } = useGetFavoriteProducts();
const { user, isLoading, error, fetchUser } = useAppwriteUser();
const {
	data: randomList,
	isPending: isPendingRandom,
	isError: isErrorRandom,
} = useGetAllProducts();

const ard = ref(false);
const dra = ref(false);

// Push content to the right
const pushContentToRight = () => {
	watchEffect(() => {
		ard.value =
			sidebarStore.isCartOpen ||
			sidebarStore.isFavoritesOpen ||
			sidebarStore.isLoginOpen;
	});
};

// Push content to the left
const pushContentToLeft = () => {
	watchEffect(() => {
		dra.value =
			sidebarStore.isSidebarOpenCatalog || sidebarStore.isSidebarOpenMore;
	});
};

// Combined handler for both directions
const handleClick = () => {
	pushContentToRight();
	pushContentToLeft();
};

// Compute classes dynamically
const computedClasses = computed(() => {
	return [
		ard.value
			? "translate-x-[-100px] transition-all duration-1000"
			: "translate-x-0 transition-all duration-1000",
		dra.value
			? "translate-x-[100px] transition-all duration-1000"
			: "translate-x-0 transition-all duration-1000",
	];
});
</script>

<template>
	<Icon @click="sidebarStore.togglePhoneOpen(), closeSidebarIfOpen()"
		:name="sidebarStore.isPhoneOpen ? 'ion:close' : 'ion:menu'" :class="sidebarStore.isPhoneOpen
				? 'fixed top-6 left-4 rotate-90 duration-700 w-10 h-10 text-white z-50 cursor-pointer '
				: 'fixed top-6 left-4 rotate-180 duration-700 w-10 h-10 text-white z-50 cursor-pointer'
			" />
	<div class="w-full h-[100px] bg-black fixed top-0 left-0 z-40 flex justify-center items-center">
		<NuxtLink v-if="!sidebarStore.isPhoneOpen" :to="`/`" class="w-full h-full flex items-center justify-center z-40"
			@click="closeSidebarIfOpen()">
			<h1
				class="font-garamond text-white hover:text-[#FFD095] text-[36px] transition-all ease-out cursor-pointer duration-500">
				Intimita Shop
			</h1>
		</NuxtLink>
	</div>

	<div v-if="sidebarStore.isPhoneOpen" class="fixed top-0 left-0 bg-black z-40 w-[100vw] h-[100vh] py-12">
		<div class="relative min-w-[150px] flex items-center justify-end">
			<!-- Search Icon -->
			<Icon v-if="!onSearchStore.isSearchOpen" @click="onSearchStore.isSearchOpen = true" name="ion:search"
				class="fixed top-8 right-4 text-[26px] text-gray-200 hover:text-[#FFD095] cursor-pointer" />

			<!-- Search Input / Results -->
			<div v-else
				class="fixed top-7 right-0 flex items-center text-[#989898] duration-700 transition-all ease-in-out z-50">
				<LayoutFilterBySearch :data="randomList ?? []" />
			</div>
		</div>
		<NuxtLink :to="`/`" class="w-full flex items-start justify-center mt-6 mb-16 z-40"
			@click="sidebarStore.togglePhoneOpen(), closeSidebarIfOpen()">
			<h1
				class="font-garamond text-white hover:text-[#FFD095] text-[36px] transition-all ease-out cursor-pointer duration-500">
				Intimita Shop
			</h1>
		</NuxtLink>
		<div class="w-[50%] mx-auto border-b border-white z-40 -mt-2" />
		<!-- Search Button -->

		<!-- User Actions -->
		<div class="fixed top-[24vh] md:top-[120px] w-full flex flex-col items-center justify-center" @click="handleClick"
			:class="computedClasses">
			<div
				class="flex items-center justify-center gap-[20px] text-[26px] transition-all duration-200 ease-out text-[#989898] pb-6 z-50">
				<!-- Profile Icon -->
				<Icon @click="toggleSidebar('Profile')" :name="user ? 'fluent:person-32-light' : 'fluent:person-warning-20-regular'
					" :class="[
				sidebarStore.isLoginOpen ? 'text-[#FFD095]' : '',
				'hover:text-[#FFD095] text-[30px] cursor-pointer ',
			]" />

				<!-- Favorites Icon -->
				<div class="relative flex items-center">
					<Icon @click="toggleSidebar('favorites')" name="mdi-light:heart" :class="[
						sidebarStore.isFavoritesOpen ? 'text-[#FFD095]' : '',
						'hover:text-[#FFD095] text-[30px] cursor-pointer',
					]" />

					<span v-if="favoriteProducts && favoriteProducts?.length >= 1" :class="[
						sidebarStore.isFavoritesOpen ? 'text-[#FFD095]' : '',
						'cursor-pointer pointer-events-none',
						'absolute flex items-center top-1/4 left-1/2 text-[10px] -translate-y-3/6 -translate-x-1/2',
					]">
						{{ favoriteProducts?.length }}
					</span>
				</div>

				<!-- Cart Icon -->
				<div class="relative flex items-center">
					<Icon @click="toggleSidebar('cart')" name="hugeicons:shopping-basket-01" :class="[
						sidebarStore.isCartOpen ? 'text-[#FFD095]' : '',
						'hover:text-[#FFD095] cursor-pointer',
					]" />

					<span v-if="cartProducts && cartProducts?.length >= 1" :class="[
						sidebarStore.isCartOpen ? 'text-[#FFD095]' : '',
						'cursor-pointer pointer-events-none',
						'absolute flex items-center top-1/3 left-1/2 text-[10px] -translate-y-3/6 -translate-x-1/2',
					]">
						{{ cartProducts?.length }}
					</span>
				</div>
			</div>

			<!-- Header Menu -->
			<div class="flex flex-col md:flex-row items-center text-[26px] hover:text-[#FFD095] text-[#989898] py-4">
				<LayoutHeaderMenu />
			</div>
		</div>
	</div>
</template>

<style scoped></style>
