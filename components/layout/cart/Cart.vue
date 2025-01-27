<script setup lang="ts">
import { useAppwriteUser } from "@/components/layout/cart/useAppwriteUser";
import { useGetCartProducts } from "@/composables/useGetCartProducts";
import { useSidebarStore } from "@/store/sidebar.store";
import { useScreenSize } from "@/composables/useWindowSize";
import { useCloseSidebarIfOpen } from "~/composables/useCloseSidebarIfOpen";

const { closeSidebarIfOpen } = useCloseSidebarIfOpen();

const { isDesktop, isTablet, isMobile } = useScreenSize();

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
  <div>
    <LayoutOrder :items="cartProducts" v-if="isMobile" />
    <LayoutOrderComplete v-if="isMobile" />
  </div>

  <div
    id="cart"
    role="dialog"
    aria-labelledby="cart-title"
    :aria-hidden="!sidebarStore.isCartOpen"
    :class="[
      'fixed top-[0vh] md:top-[120px] right-0 md:h-[520px] h-full overflow-hidden w-[100vw] md:w-[34vw] bg-black md:bg-white md:text-black text-white  flex flex-col z-40 py-6',
      cartClasses,
    ]"
  >
    <LayoutOrder :items="cartProducts" />
    <LayoutOrderComplete />
    <!-- Header -->
    <h1 id="cart-title" class="font-light text-center mb-[43px] text-[32px]">
      Cart
    </h1>

    <div class="w-full h-[100vh] flex flex-col justify-center items-center">
      <!-- Loading State -->
      <div
        v-if="isPendingCartProducts"
        class="uppercase text-center text-base font-light text-black"
      >
        Loading...
      </div>

      <!-- Error State -->
      <div
        v-if="isErrorCartProducts"
        class="uppercase text-center text-base font-light text-red-500"
      >
        Error loading cart. Please try again.
      </div>

      <!-- Cart Items -->
      <div
        v-if="cartProducts && cartProducts?.length > 0 && user"
        class="w-full flex flex-col space-y-[50px]"
      >
        <LayoutCartItem :items="cartProducts" />
        <LayoutCartButtons />
      </div>

      <!-- Not Logged In -->
      <div
        @click="goTo"
        v-else-if="!user"
        class="uppercase cursor-pointer text-base flex justify-center items-end space-x-2 font-light"
      >
        <p>Log in Or Registrate</p>
        <Icon name="mdi-light:arrow-right" size="30" />
      </div>

      <!-- Empty Cart -->
      <div
        v-else
        class="uppercase text-center text-base space-x-2 font-light md:text-black text-white"
      >
        Your cart is empty
      </div>
    </div>
  </div>
</template>

<style scoped></style>
