<script setup lang="ts">
import { useGetItemse } from "@/composables/useGetItems";
import { useSidebarStore } from "@/store/sidebar.store";

const { data } = useGetItemse();
</script>

<template>
  <div>
    <div v-for="item in data" :key="item.$id">
      <div>
        <div class="text-black">{{ item.name }}</div>
        <div class="text-black">{{ item.price }}</div>
        <div>{{ item.description }}</div>
        <img :src="item.foto_url" alt="" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
