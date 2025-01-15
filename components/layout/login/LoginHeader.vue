<script setup lang="ts">
import { useAuthStore } from "@/store/auth.store";

const authStore = useAuthStore();
</script>
<template>
			<div class="w-[50%]">
				<h1 class="text-3xl font-bold text-center mb-3 text-black">Account</h1>
				<div class="flex gap-5 py-6">
					<UiButton @click="authStore.toggleForm()"
						class="w-full bg-black text-white hover:text-[#FFD095] hover:bg-black transition-all duration-300  text-[12px] rounded-2xl px-2 h-8">
						Login
					</UiButton>
					<UiButton @click="authStore.toggleForm()"
						class="w-full bg-white text-black  hover:bg-white text-[12px] rounded-2xl border border-black px-2 h-8">
						Register
					</UiButton>
				</div>
			</div>
</template>


<style scoped>

</style>