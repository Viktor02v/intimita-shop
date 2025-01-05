<script setup lang="ts">
import { useSidebarStore } from "@/store/sidebar.store";
import { useIsSubscribedStore } from "~/store/subscribed.store";
const sidebarStore = useSidebarStore();

const isSubscribed = useIsSubscribedStore();
</script>
<template>
  <div class="w-[85%] h-full mx-auto py-[140px]">
    <div
      class="w-full h-[360px] flex justify-between items-center rounded-lg shadow-[0_4px_15px_rgba(0,0,0,0.2)] relative"
    >
      <div class="w-1/2 h-full flex flex-col gap-[5%] px-[4%]">
        <h1 class="text-[36px] font-bold text-black pt-1">Subscription</h1>
        <div class="px-[2%] flex flex-col gap-8">
          <div>I want to receive information about new products</div>
          <div class="w-full"><LayoutSubscriptionForm /></div>
        </div>
      </div>
      <div class="w-1/2">
        <img
          src="public/subscription/subscription.png"
          alt=""
          class="flex w-[100%] h-[100%] object-cover"
        />
      </div>

      <div
        :class="
          isSubscribed.isSubscribed
            ? 'absolute top-0 max-w-[90%] left-0 h-[100%] -translate-x-0 transition-all duration-1000 opacity-100'
            : 'absolute top-0 left-0 max-w-[90%] h-[100%] -translate-x-full transition-all duration-1000 opacity-0'
        "
        class="w-full bg-[#FFD095] text-3xl flex justify-center items-center font-light font-monospace"
      >
        Subscription is complete
      </div>
    </div>
  </div>
</template>

<style scoped></style>
