<script setup lang="ts">
import { defineProps } from "vue";
import { ref, onMounted } from "vue";
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
});

const isHoverText = ref(false);
</script>
<template>
  <NuxtLink
    :to="link"
    class="w-full h-full flex items-center justify-center gap-2 text-[14px]"
    @mouseover="isHoverText = true"
    @mouseleave="isHoverText = false"
  >
    <div
      class="text-[14px]"
      :class="
        isHoverText
          ? 'text-[#FFD095]  transition-all duration-1000'
          : 'transition-all duration-1000'
      "
      :size="props.size"
    >
      {{ props.title }}
    </div>
    <Icon
      :name="props.icon"
      class="-rotate-45"
      :class="
        isHoverText
          ? ' backflip text-[#FFD095]  transition-all duration-1000'
          : 'transition-all duration-700'
      "
    />
  </NuxtLink>
</template>

<style scoped>
.backflip {
  transform: rotateX(180deg) rotateZ(0deg);
}
</style>
