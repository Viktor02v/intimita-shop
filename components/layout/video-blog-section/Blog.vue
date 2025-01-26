<script setup lang="ts">
import { ARROW_DATA } from "../arrow/arrow.data";
defineProps({
  title: {
	 type: String,
	 required: true,
  },
});
</script>

<template>
	<div class="w-full py-[20px] sm:py-[30px] lg:py-[43px]">
 
	  <!-- Title Section -->
	  <div class="lg:pl-[120px]">
		 <TItleItem :title="title" />
	  </div>
 
	  <!-- Video Blog Section -->
	  <LayoutVideoBlogSection />
 
	</div>
 </template>
 

 
 <style scoped></style>
 