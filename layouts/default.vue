<script setup lang="ts">
import { ref, watch } from "vue";
import { useSidebarStore } from "@/store/sidebar.store";

const sidebarStore = useSidebarStore();
const onOpacity = ref(false);

const calculateOpacity = computed(() => {
  // Add your conditions here
  const isAnyOpen =
    sidebarStore.isSidebarOpenCatalog ||
    sidebarStore.isSidebarOpenMore ||
    sidebarStore.isCartOpen ||
    sidebarStore.isFavoritesOpen;

  return isAnyOpen
    ? "opacity-50  transition-all duration-500 easy-in-out "
    : "opacity-100";
});

const closeSidebarIfOpen = () => {
  if (
    sidebarStore.isSidebarOpenCatalog ||
    sidebarStore.isSidebarOpenMore ||
    sidebarStore.isCartOpen ||
    sidebarStore.isFavoritesOpen
  ) {
    sidebarStore.isSidebarOpenCatalog = false;
    sidebarStore.isSidebarOpenMore = false;
    sidebarStore.isCartOpen = false;
    sidebarStore.isFavoritesOpen = false;
  } else {
    return;
  }
};
</script>

<template>
  <section class="relative w-full h-[100vh]">
    <LayoutHeader />
    <LayoutSidebar />
    <div
      class="w-full mt-[120px]"
      :class="calculateOpacity"
      @click="closeSidebarIfOpen"
    >
      <slot />
    </div>
    <LayoutFooter />
  </section>
</template>
<style scoped></style>
