<script setup lang="ts">
import { useAppwriteUser } from "@/components/layout/cart/useAppwriteUser"

import { computed } from "vue";
import { useSidebarStore } from "@/store/sidebar.store";

const sidebarStore = useSidebarStore();


const loginClasses = computed(() =>
	sidebarStore.isLoginOpen
		? "translate-x-0 duration-1000 opacity-100"
		: "translate-x-full duration-1000 opacity-100"
);

const { user, isLoading, error, fetchUser } = useAppwriteUser();

</script>

<template>
	<div id="profile" role="dialog" aria-labelledby="profile-title" :aria-hidden="!sidebarStore.isLoginOpen" :class="[
		'fixed top-[120px] right-0 h-[57.7vh] w-[34vw] bg-white py-6 flex flex-col z-50 justify-start items-center',
		loginClasses,
	]">

		<!-- Header -->
		<LayoutLoginHeader />

		<!-- Logout -->
		<LayoutLoginLogout v-if="user" />

		<!-- Body -->
		<LayoutLoginBody />

	</div>
</template>

<style scoped></style>
