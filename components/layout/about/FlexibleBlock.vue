<script setup lang="ts">
import { defineProps } from "vue";

defineProps({
  reverse: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div
    :class="[
      'w-full flex flex-col md:flex-row items-center',
      reverse ? 'md:flex-row-reverse' : '',
    ]"
  >
    <!-- Foto Block -->
    <div class="w-full md:w-1/2 h-[50vh] sm:h-[60vh] md:h-[80vh] lg:h-[100vh]">
      <slot name="foto-block" />
    </div>

    <!-- Content Block -->
    <div class="w-full md:w-1/2 py-6 md:py-0">
      <slot name="content-block" />
    </div>
  </div>
</template>

<style scoped>

</style>
