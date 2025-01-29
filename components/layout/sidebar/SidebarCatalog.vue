<script setup lang="ts">
import { defineProps } from "vue";
import { useSidebarStore } from "@/store/sidebar.store";
import { useCloseSidebarIfOpen } from "~/composables/useCloseSidebarIfOpen";
import { useSidebarFilter } from "~/composables/useSidebarFilter";

const { closeSidebarIfOpen } = useCloseSidebarIfOpen();

const filterValue = ref();
const sidebarStore = useSidebarStore();

const props = defineProps({
	items: {
		type: Object,
		required: false,
	},
	title: {
		type: Object,
		required: true,
	},
	url: {
		type: String,
	},
});

const { sidebarFilter, filterValues } = useSidebarFilter();

const handleSubmit = (i: any) => {
	sidebarFilter(i);
};
</script>
<template>
	<div class="w-[60vw] md:w-[35vw] flex justify-start items-center z-50 px-2">
		<div class="w-3/4 h-full flex flex-col justify-start items-start">
			<NuxtLink :to="props.url" @click="
				closeSidebarIfOpen,
				(sidebarStore.isPhoneOpen = false),
				closeSidebarIfOpen()
				" class="text-black font-garamond text-[20px] font-light mt-2 hover:text-[#FFD095] duration-500">
				{{ props.title.name }}
			</NuxtLink>
			<div v-for="item in props.items" :key="item.name">
				<NuxtLink :to="props.url" @click="
					handleSubmit((filterValues = item.filterBy)),
					(sidebarStore.isPhoneOpen = false),
					closeSidebarIfOpen()
					" class="text-[12px] 2xl:text-[16px] text-black p-1 hover:text-[#FFD095] hover:translate-x-2 duration-500">
					{{ item.name }}
				</NuxtLink>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
