<script setup lang="ts">
import { useAppwriteUser } from "@/components/layout/cart/useAppwriteUser";
import { computed } from "vue";
import { useSidebarStore } from "@/store/sidebar.store";

const sidebarStore = useSidebarStore();

const loginClasses = computed(() =>
  sidebarStore.isLoginOpen
    ? "translate-x-0 duration-1000 opacity-100"
    : "translate-x-full duration-1000 opacity-100"
);

const { user, isLoading, error, fetchUser } = useAppwriteUser();
</script>

<template>
  <div
    id="profile"
    role="dialog"
    aria-labelledby="profile-title"
    :aria-hidden="!sidebarStore.isLoginOpen"
    :class="[
      'fixed top-[0vh] md:top-[120px] right-0 md:h-[520px] h-full overflow-hidden w-[100vw] md:w-[34vw] md:bg-white bg-black md:text-black text-white flex flex-col justify-center items-center z-40 py-6',
      loginClasses,
    ]"
  >
    <!-- Header -->
    <LayoutLoginHeader />

    <!-- Logout -->
    <LayoutLoginLogout v-if="user" />

    <!-- Body -->
    <LayoutLoginBody />
  </div>
</template>

<style scoped></style>
