<template>
  <div class="py-[43px]">
	<div class="pl-[120px]">
	<TItleItem :title="title"/>
</div>
    <LayoutVideoBlogSectionCollageSection />

    <div class="w-full flex justify-center py-[31px]">
      <LayoutArrowOnChange
        :title="ARROW_DATA[0].title"
        :icon="ARROW_DATA[0].icon"
        :link="ARROW_DATA[0].link"
        :size="ARROW_DATA[0].size"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ARROW_DATA } from "../arrow/arrow.data";
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<style scoped></style>
