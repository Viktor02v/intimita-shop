<script setup lang="ts">
import { useGetFavoriteProducts } from "@/composables/useGetFavoriteProducts";
import { useSidebarStore } from "@/store/sidebar.store";
import { computed } from "vue";

const sidebarStore = useSidebarStore();

const {
  data: favoriteProducts = [],
  isPending: isPendingFavoriteProducts,
  isError: isErrorFavoriteProducts,
} = useGetFavoriteProducts();

const favoritesClasses = computed(() =>
  sidebarStore.isFavoritesOpen
    ? "translate-x-0 duration-1000 opacity-100"
    : "translate-x-full duration-1000 opacity-100"
);
</script>

<template>
  <div
    role="dialog"
    aria-labelledby="cart-title"
    :aria-hidden="!sidebarStore.isFavoritesOpen"
    :class="[
      'fixed top-[120px] right-0 h-[57.7vh] w-[34vw] bg-white py-6 flex flex-col z-50',
      favoritesClasses,
    ]"
  >
    <!-- Header -->
    <h1 id="cart-title" class="font-light text-center mb-[43px] text-[32px]">
      Wishlist
    </h1>

    <!-- Loading State -->
    <div
      v-if="isPendingFavoriteProducts"
      class="uppercase text-center text-base font-light"
    >
      Loading...
    </div>

		<!-- Error State -->
		<div v-if="isErrorFavoriteProducts" class="uppercase text-center text-base font-light text-red-500">
			Error loading Wishlist. Please try again.
		</div>

    <!-- Wishlist Items -->
    <div
      v-else-if="favoriteProducts && favoriteProducts?.length > 0"
      class="w-full flex flex-col space-y-[25px]"
    >
      <LayoutFavoritesItems :items="favoriteProducts" />

      <LayoutFavoritesButton />
    </div>

    <!-- Empty Wishlist -->
    <div v-else class="uppercase text-center text-base font-light">
      Your Wishlist is Empty
    </div>
  </div>
</template>

<style scoped></style>
