<script setup lang="ts">
import { useAuthStore } from "@/store/auth.store";

import { account } from "~/lib/appwrite";
const authStore = useAuthStore();

const logout = async () => {
	try {
		console.log("Attempting to log out...");
		await account.deleteSession("current");
		console.log("Session deleted successfully.");
		authStore.set({ email: "", name: "", status: false });
		console.log("Auth store updated:", authStore.$state);
		setTimeout(() => {
        window.location.reload();
      }, 100);
	} catch (error) {
		console.error("Logout failed:", error);
		authStore.errorMessage = "Logout failed. Please try again.";
		console.log("Error message set in authStore:", authStore.errorMessage);
	}
};
</script>

<template>
	<div class="absolute top-[5vh] right-[5vw] flex flex-col gap-2">
		<button @click="logout" class="text-[12px] hover:text-[#FFD095] duration-500">
			<Icon name="material-symbols:logout-rounded" class="w-5 h-5 text-black" />
		</button>
	</div>
</template>

<style scoped>

</style>