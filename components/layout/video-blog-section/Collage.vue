<template>
  <div class="py-[43px]">
    <h1 class="py-[21px] px-[9%] text-[36px] font-bold">
      {{ title }}
    </h1>
    <LayoutVideoBlogSectionCollageSection />
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<style scoped></style>
