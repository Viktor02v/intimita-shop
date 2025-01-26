<script setup lang="ts">
import { useSidebarStore } from "@/store/sidebar.store";
import { useIsSubscribedStore } from "~/store/subscribed.store";

const sidebarStore = useSidebarStore();
const isSubscribed = useIsSubscribedStore();
</script>

<template>
  <div class="md:px-20 h-full py-[60px] sm:py-[100px] lg:py-[140px]">
    <div
      class="w-full h-full flex flex-col sm:flex-row justify-between items-center rounded-lg shadow-[0_4px_15px_rgba(0,0,0,0.2)] relative"
    >
      <!-- Subscription Text Section -->
      <div class="w-full sm:w-1/2 h-full flex flex-col gap-[5%] px-[4%] sm:px-[6%] mb-5 md:mb-0">
        <h1 class="text-[28px] sm:text-[36px] text-center md:text-left font-bold text-black pt-1">Subscription</h1>
        <div class="px-[2%] flex flex-col gap-6 sm:gap-8">
          <div class="text-[14px] sm:text-[16px]">
            I want to receive information about new products
          </div>
          <div class="w-full flex justify-center md:flex-none md:justify-normal">
            <LayoutSubscriptionForm />
          </div>
        </div>
      </div>

      <!-- Image Section -->
      <div class="w-full sm:w-1/2 h-[300px] sm:h-[360px]">
        <img
          src="public/subscription/subscription.png"
          alt="Subscription Image"
          class="w-full h-full md:rounded-lg object-cover"
        />
      </div>

      <!-- Subscription Confirmation -->
      <div
        :class="
          isSubscribed.isSubscribed
            ? 'absolute top-0 left-0 max-w-[90%] w-full h-full bg-[#FFD095] text-3xl sm:text-4xl md:text-5xl flex justify-center items-center font-light font-monospace opacity-100 transition-all duration-1000'
            : 'absolute top-0 left-0 max-w-[90%] w-full h-full bg-[#FFD095] text-3xl sm:text-4xl md:text-5xl flex justify-center items-center font-light font-monospace opacity-0 -translate-x-full transition-all duration-1000'
        "
        class="z-10"
      >
        Subscription is complete
      </div>
    </div>
  </div>
</template>

<style scoped></style>
