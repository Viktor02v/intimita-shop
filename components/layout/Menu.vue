<script setup lang="ts">
import { MENU_DATA } from '@/components/layout/menu.data';
import { useMenuStore } from '@/store/menu.store';
const menuStore = useMenuStore()
</script>

<template>
	<div>
		<NuxtLink :to="item.url" v-for="item in MENU_DATA " :key="item.name"
			class="">
			<span>{{ item.name }}</span>
		</NuxtLink>
	</div>
</template>

<style scoped>

</style>