<script setup lang="ts">
import { useAppwriteUser } from "@/components/layout/cart/useAppwriteUser";
import { useGetCartProducts } from "@/composables/useGetCartProducts";
import { useGetFavoriteProducts } from "@/composables/useGetFavoriteProducts";
import { toggleSidebar } from "@/composables/useToggleSidebar";
import { useSidebarStore } from "@/store/sidebar.store";
import { useGetAllProducts } from "@/composables/useGetAllProducts";
import { useSearchStore } from "@/store/search.store";

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
</script>

<template>
	<div class="fixed top-0 left-0 w-full bg-black z-50 min-h-[120px] flex items-center justify-between px-8">

		<!-- Search Button -->
		<div class="relative min-w-[150px] flex items-center justify-center">
			<!-- Search Icon -->
			<Icon v-if="!onSearchStore.isSearchOpen" @click="onSearchStore.isSearchOpen = true" name="ion:search"
				class="text-[26px] text-gray-200 hover:text-[#FFD095] cursor-pointer" />

			<!-- Search Input / Results -->
			<div v-else class="flex items-center text-[#989898]">
				<LayoutFilterBySearch :data="randomList ?? []" />
			</div>
		</div>


		<!-- Header Menu -->
		<div class="flex items-center text-[26px] hover:text-[#FFD095] text-[#989898]">
			<LayoutHeaderMenu />
		</div>

		<!-- User Actions -->
		<div class="flex items-center gap-[30px] text-[26px] transition-all duration-200 ease-out text-[#989898]">
			<!-- Profile Icon -->
			<Icon @click="toggleSidebar('Profile')"
				:name="user ? 'fluent:person-32-light' : 'fluent:person-warning-20-regular'" :class="[
					sidebarStore.isLoginOpen ? 'text-[#FFD095]' : '',
					'hover:text-[#FFD095] text-[30px] cursor-pointer',
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
	</div>
</template>

<style scoped>

.fixed {
	height: 120px;
	
	display: flex;
	justify-content: space-around;
	
	align-items: center;
	
}
</style>
