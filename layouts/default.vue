<script setup lang="ts">
import { useIsLoadingStore } from "@/store/auth.store";
import { useSidebarStore } from "@/store/sidebar.store";
import { account } from "@/lib/appwrite";
import { useScreenSize } from "@/composables/useWindowSize";
import { useCloseSidebarIfOpen } from "~/composables/useCloseSidebarIfOpen";

const { closeSidebarIfOpen } = useCloseSidebarIfOpen();

const { isDesktop, isTablet, isMobile } = useScreenSize();

const sidebarStore = useSidebarStore();

const isLoadingStore = useIsLoadingStore();
onMounted(async () => {
	const isLoadingStore = useIsLoadingStore();
	const authStore = useAuthStore();
	const router = useRouter();
	try {
		const user = await account.get();
		if (user) {
			authStore.set(user);
		}
	} catch (error) {
	} finally {
		isLoadingStore.set(false);
	}
});

const calculateOpacity = computed(() => {
	// Add your conditions here
	const isAnyOpen =
		sidebarStore.isSidebarOpenCatalog ||
		sidebarStore.isSidebarOpenMore ||
		sidebarStore.isCartOpen ||
		sidebarStore.isFavoritesOpen ||
		sidebarStore.isLoginOpen;

	return isAnyOpen
		? "opacity-50  transition-all duration-500 easy-in-out "
		: "opacity-100";
});

const shadowStyle = ref({
	left: '0px',
	top: '0px',
});

const handleMouseMove = (e: MouseEvent) => {
	const target = e.currentTarget as HTMLElement;
	const rect = target.getBoundingClientRect();
	const x = e.clientX - rect.left;
	const y = e.clientY - rect.top;

	shadowStyle.value = {
		left: `${x}px`,
		top: `${y}px`,
	};
};
</script>

<template>
	<div :class="sidebarStore.isPhoneOpen ? 'overflow-hidden scrollbar-none' : ''">
		<LayoutLoader v-if="isLoadingStore.isLoading" />
		<section v-else class="relative w-full h-[100vh]">
			<LayoutHeaderPhone v-if="isMobile" :class="sidebarStore.isPhoneOpen
				? 'scrollbar-none overflow-y-auto'
				: 'scrollbar-none overflow-y-hidden'
				" />
			<LayoutHeader v-else />

			<LayoutSidebar />
			<div :class="[
				isMobile ? 'w-full mt-[100px]  ' : 'w-full mt-[120px]',
				sidebarStore.isPhoneOpen
					? 'scrollbar-none overflow-y-hidden'
					: 'scrollbar-none overflow-y-hidden',
				calculateOpacity,
			]" @click="closeSidebarIfOpen">
				<div class="content-container relative" @mousemove="handleMouseMove">
					<div class="mouse-shadow pointer-events-none absolute w-[250px] h-[250px] 
bg-[radial-gradient(circle,rgba(255,188,105,0.2)_20%,transparent_70%)] 
rounded-full transform -translate-x-1/2 -translate-y-1/2 z-1" :style="shadowStyle" />
					<slot />
				</div>
				<LayoutFooter />
			</div>
		</section>
	</div>
</template>
<style scoped></style>
