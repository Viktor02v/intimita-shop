<script setup lang="ts">
import { MENU_DATA } from "@/components/layout/header/menu.data";
import {
	FOOTER_CATALOG_DATA,
	FOOTER_MENU_DATA,
	FOOTER_CONTACTS_DATA,
	FOOTER_TITLES,
	FOOTER_PAYMENT_DATA,
} from "@/components/layout/footer/footer.data";
</script>

<template>
	<div class="h-[363px] bg-black w-[100vw] flex flex-col items-center justify-end px-20 pb-[71px]">
		<h1
			class="w-full h-full flex items-start justify-center text-white text-[40px] hover:text-[#DCAF75] transition-all duration-500">
			{{ MENU_DATA[2].name }}
		</h1>
		<div class="w-full h-full flex justify-around items-start text-white">
			<div class="w-full flex justify-between items-baseline text-white">
				<LayoutFooterColumn :type="FOOTER_CATALOG_DATA" :title="FOOTER_TITLES[0]" />

				<LayoutFooterColumn :type="FOOTER_MENU_DATA" :title="FOOTER_TITLES[1]" />

				<LayoutFooterColumn :type="FOOTER_CONTACTS_DATA" :title="FOOTER_TITLES[2]" />
			</div>
			<div class="w-full h-full flex justify-end items-end gap-[63px] text-white">
				<ul v-for="item in FOOTER_PAYMENT_DATA" :key="item.name" class="flex flex-col">
					<img :src="item.img" />
				</ul>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
