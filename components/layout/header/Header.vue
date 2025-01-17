<script setup lang="ts">
import { useAppwriteUser } from "@/components/layout/cart/useAppwriteUser"
import { useGetCartProducts } from "@/composables/useGetCartProducts";
import { useGetFavoriteProducts } from "@/composables/useGetFavoriteProducts";
import { toggleSidebar } from "@/composables/useToggleSidebar";
import { useSidebarStore } from "@/store/sidebar.store";
import { useGetAllProducts } from "~/composables/useGetAllProducts";
import { useSearchStore } from "~/store/search.store";

const onSearchStore = useSearchStore();
const sidebarStore = useSidebarStore();
const { data: cartProducts = [] } = useGetCartProducts();
const { data: favoriteProducts = [] } = useGetFavoriteProducts();


const { user, isLoading, error, fetchUser } = useAppwriteUser();
const {
  data: randomList,
  isPending: isPendingRandom,
  isError: isErrorRandom,
} = useGetAllProducts();

watch(sidebarStore, () => {
  console.log("isSidebarOpen:", sidebarStore.isLoginOpen);
});
</script>

<template>
  <div
    class="fixed top-0 left-0 min-h-[120px] max-h-[120px] bg-black w-full z-50"
  >
    <div
      class="flex items-center min-h-[120px] max-h-[120px] px-[85px] relative"
    >
      <button>
        <Icon
          @click="onSearchStore.isSearchOpen = true"
          v-if="!onSearchStore.isSearchOpen"
          name="ion:search"
          class="text-[26px] text-gray-200 hover:text-[#FFD095] absolute bottom-3/9 left-1/8 -translate-x-1/2 -translate-y-1/2"
        />
        <div
          class="absolute bottom-1/3 left-1/9 -translate-x-1/9 flex items-center text-[#989898]"
          v-else
        >
          <LayoutFilterBySearch :data="randomList ?? []" />
        </div>
      </button>
      <div class="px-[10vw]"></div>
      <div
        class="flex items-center text-[26px] hover:text-[#FFD095] text-[#989898]"
      >
        <LayoutHeaderMenu />
      </div>
      <div class="px-[5vw]"></div>
      <div
        class="flex items-center gap-[30px] text-[26px] transition-all duration-200 ease-out text-[#989898]"
      >
        <Icon
          @click="toggleSidebar('Profile')"
          :name="user ? 'fluent:person-32-light' : 'fluent:person-warning-20-regular'"
          :class="[
            sidebarStore.isLoginOpen ? 'text-[#FFD095]' : '',
            'hover:text-[#FFD095] text-[30px] cursor-pointer',
          ]"
        />

        <div class="relative flex items-center">
          <Icon
            @click="toggleSidebar('favorites')"
            name="mdi-light:heart"
            :class="[
              sidebarStore.isFavoritesOpen ? 'text-[#FFD095]' : '',
              'hover:text-[#FFD095] text-[30px] cursor-pointer',
            ]"
          />
          <span
            v-if="favoriteProducts && favoriteProducts?.length >= 1"
            :class="[
              sidebarStore.isFavoritesOpen ? 'text-[#FFD095]' : '',
              ' cursor-pointer pointer-events-none',
              'absolute flex items-center   top-1/4 left-1/2 text-[10px] -translate-y-3/6 -translate-x-1/2',
            ]"
          >
            {{ favoriteProducts?.length }}
          </span>
        </div>

        <div class="relative flex items-center">
          <Icon
            @click="toggleSidebar('cart')"
            name="hugeicons:shopping-basket-01"
            :class="[
              sidebarStore.isCartOpen ? 'text-[#FFD095]' : '',
              'hover:text-[#FFD095] cursor-pointer',
            ]"
          />
          <span
            v-if="cartProducts && cartProducts?.length >= 1"
            :class="[
              sidebarStore.isCartOpen ? 'text-[#FFD095]' : '',
              ' cursor-pointer pointer-events-none',
              'absolute flex items-center   top-1/3 left-1/2 text-[10px] -translate-y-3/6 -translate-x-1/2',
            ]"
          >
            {{ cartProducts?.length }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
