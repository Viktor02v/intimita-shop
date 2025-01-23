<script setup lang="ts">

import { useIsLoadingStore } from '@/store/auth.store';
import { useSidebarStore } from "@/store/sidebar.store";
import { account } from "@/lib/appwrite"

const sidebarStore = useSidebarStore();

const isLoadingStore = useIsLoadingStore();
onMounted(async () => {
	const isLoadingStore = useIsLoadingStore();
	const authStore = useAuthStore();
	const router = useRouter();
	try {
		const user = await account.get()
		if (user) {
			authStore.set(user)
		}
	} catch (error) {
	} finally {
		isLoadingStore.set(false)
	}
})

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

const closeSidebarIfOpen = () => {
	if (
		sidebarStore.isSidebarOpenCatalog ||
		sidebarStore.isSidebarOpenMore ||
		sidebarStore.isCartOpen ||
		sidebarStore.isFavoritesOpen ||
		sidebarStore.isLoginOpen
	) {
		sidebarStore.isSidebarOpenCatalog = false;
		sidebarStore.isSidebarOpenMore = false;
		sidebarStore.isCartOpen = false;
		sidebarStore.isFavoritesOpen = false;
		sidebarStore.isLoginOpen = false;
	} else {
		return;
	}
};
</script>

<template>
	<LayoutLoader v-if="isLoadingStore.isLoading" />
	<section v-else class="relative w-full h-[100vh]">
		<LayoutHeader />
		<LayoutSidebar />
		<div class="w-full mt-[120px]" :class="calculateOpacity" @click="closeSidebarIfOpen">
			<slot />
		</div>
		<LayoutFooter />
	</section>
</template>
<style scoped>

</style>
