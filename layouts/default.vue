<script setup lang="ts">
import { ref, watch } from "vue";
import { useSidebarStore } from "@/store/sidebar.store";

const sidebarStore = useSidebarStore();
const onOpacity = ref(false);

const calculateOpacity = computed(() => {
  // Add your conditions here
  const isAnyOpen =
    sidebarStore.isSidebarOpenCatalog || sidebarStore.isSidebarOpenMore;

  // Return opacity based on the conditions
  return isAnyOpen ? "opacity-70" : "opacity-100";
});
</script>

<template>
  <section class="relative w-full h-[100vh]">
    <LayoutHeader />
    <LayoutSidebar />
    <div class="w-full mt-[120px]" :class="calculateOpacity">
      <slot />
    </div>
    <LayoutFooter />
  </section>
</template>
<style scoped></style>
