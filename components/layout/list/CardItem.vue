<script setup lang="ts">
defineProps({
	item: Object,
	required: true,
});
</script>

<template>
	<NuxtLink :to="`/products/${item.$id}`">
		<div class="flex items-center justify-center w-[210px] h-[150px] overflow-hidden">
			<NuxtImg :src="item.foto_url" class="max-w-[150%] max-h-[190%] object-contain" />
		</div>

		<div class="flex self-start flex-col mt-4 w-full">
			<p class="text-[15px] font-normal break-words">{{ item.name }}</p>
			<p class="font-light text-[11px] break-words">{{ item.description }}</p>
		</div>

		<div class="absolute bottom-[22px] flex self-start flex-col mt-2">
			<p v-if="item.isOnSale" class="text-[15px] font-bold line-through text-[#979797]">
				{{ item.onSalePrice }}
			</p>
			<p class="text-[15px] font-bold">{{ item.price }}</p>
		</div>
	</NuxtLink>
</template>

<style scoped></style>
