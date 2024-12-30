<script setup lang="ts">
import { MENU_DATA } from '@/components/layout/header/menu.data';
import { useMenuStore } from '@/store/menu.store';
const menuStore = useMenuStore()
</script>

<template>
	<div class=" flex items-center text-xl gap-[67px] font-normal ">
		<NuxtLink :to="item.url" v-for="item in MENU_DATA " :key="item.name" class="text-white text-center w-full ">
			<div
				:class="[item.name === 'Intimita Shop' ? 'font-garamond text-[32px] font-light' : '', 'flex items-center hover:text-[#FFD095] transition-all ease-out duration-200']">
				<span>{{
					item.name }}</span>
				<Icon v-if="['Shop', 'More'].includes(item.name)" name="iconamoon:arrow-up-2-light" size="18" />
			</div>
		</NuxtLink>
	</div>
</template>

<style scoped></style>