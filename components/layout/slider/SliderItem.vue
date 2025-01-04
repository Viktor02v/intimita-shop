<script setup lang="ts">
defineProps({
  fotoUrl: String,
  title: String,
  url: String,
});
const isHoverText = ref(false);
</script>

<template>
  <div class="relative">
    <NuxtImg
      :src="fotoUrl"
      class="w-full min-h-[520px] max-h-[520px] brightness-50 overflow-hidden"
    />
    <NuxtLink
      :to="url"
      class="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    >
      <div class="text-white flex flex-col items-center text-center">
        <h1
          class="text-[40px] hover:scale-110 transition-all duration-500 hover:text-[#ffcf95aa] font-base leading-10"
        >
          {{ title }}
        </h1>
        <div
          class="flex gap-2 hover:text-[#ffcf95aa] transition-all duration-500 items-center font-light text-base mt-2"
          @mouseover="isHoverText = true"
          @mouseleave="isHoverText = false"
        >
          <p>view more</p>
          <Icon
            name="prime:arrow-up-right"
            class="text-base"
            :class="
              isHoverText
                ? 'text-[#FFD095] backflip transition-all duration-700'
                : 'transition-all duration-700'
            "
          />
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<style scoped>
.backflip {
  transform: rotateX(180deg) rotateZ(45deg);
}
</style>
