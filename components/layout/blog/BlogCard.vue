<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
	item: {
		type: Object,
		required: true,
	},
});
</script>

<template>
	<div class="w-full">
	  <!-- Card Link -->
	  <NuxtLink :to="`/blogs/${props.item.$id}`" class="w-full">
		 <div class="rounded-lg shadow-lg w-full overflow-hidden">
			<!-- Image with hover effect -->
			<NuxtImg 
			  :src="props.item.foto_url[0]" 
			  alt="Blog image"
			  class="w-full h-[300px] object-cover transform transition-all duration-300 hover:brightness-75 hover:scale-105" />
		 </div>
 
		 <!-- Card Title -->
		 <h3 class="text-xl mt-4 font-semibold text-gray-800 truncate text-center sm:text-left">
			{{ props.item.title[0] }}
		 </h3>
	  </NuxtLink>
	</div>
 </template>
 
 <style scoped>
 /* Ensure full width for the container */
 </style>
 
 
 
