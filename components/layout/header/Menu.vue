<script setup lang="ts">
import { MENU_DATA } from "@/components/layout/header/menu.data";
import { useMenuStore } from "@/store/menu.store";
import { useSidebarStore } from "@/store/sidebar.store";
import {toggleSidebar} from "@/composables/useToggleSidebar"
const sidebarStore = useSidebarStore();
const menuStore = useMenuStore();


</script>

<template>
	<nav class="flex items-center text-xl gap-[67px] font-normal">
		<NuxtLink :to="item.url" v-for="item in MENU_DATA" :key="item.name" class="text-white text-center w-full">
			<li :class="[item.name === 'Intimita Shop' ? 'font-garamond text-[32px] font-light' : '', ['Catalog'].includes(item.name) && sidebarStore.isSidebarOpenCatalog ? 'text-[#FFD095] ' : '', ['More'].includes(item.name) && sidebarStore.isSidebarOpenMore ? 'text-[#FFD095]' : '', 'flex items-center hover:text-[#FFD095] transition-all ease-out cursor-pointer duration-200',
			]">
				<span @click="toggleSidebar(item.name)">{{ item.name }}</span>
				<Icon v-if="item.name === 'Catalog' && sidebarStore.isSidebarOpenCatalog"
					name="iconamoon:arrow-up-2-light" size="18" />
				<Icon v-else-if="item.name === 'More' && sidebarStore.isSidebarOpenMore" name="iconamoon:arrow-up-2-light"
					size="18" />
				<Icon v-else-if="['Catalog', 'More'].includes(item.name)" name="iconamoon:arrow-down-2-light" size="18" />
			</li>
		</NuxtLink>
	</nav>
</template>

<style scoped></style>
