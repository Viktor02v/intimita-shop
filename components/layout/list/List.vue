<script setup lang="ts">
defineProps({
  items: Object,
  required: true,
});
</script>

<template>
  <div class="grid grid-cols-4 w-full gap-[50px]">
    <div v-for="item in items" :key="item.$id" class="">
      <LayoutListCardList :item="item" />
    </div>
  </div>
</template>

<style scoped></style>
