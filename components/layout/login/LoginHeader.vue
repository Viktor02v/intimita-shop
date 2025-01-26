<script setup lang="ts">
import { useAppwriteUser } from "@/components/layout/cart/useAppwriteUser";
import { useAuthStore } from "@/store/auth.store";

const authStore = useAuthStore();

const { user, isLoading, error, fetchUser } = useAppwriteUser();
</script>
<template>
  <div class="w-[50%] mt-[66px]">
    <h1 class="text-3xl font-bold text-center md:text-black text-white">
      {{ !authStore.isRessetFormOpen ? " Account" : "Resset Password" }}
    </h1>
    <div class="flex gap-5 py-[37px]">
      <UiButton
        v-if="!user"
        @click="authStore.toggleForm()"
        class="w-full bg-black text-white hover:text-[#FFD095] hover:bg-black transition-all duration-300 text-[12px] rounded-2xl px-2 h-8"
      >
        Login
      </UiButton>
      <UiButton
        @click="authStore.toggleForm()"
        class="w-full bg-white text-black hover:bg-white text-[12px] rounded-2xl border border-black px-2 h-8"
      >
        Register
      </UiButton>
    </div>
  </div>
</template>

<style scoped></style>
