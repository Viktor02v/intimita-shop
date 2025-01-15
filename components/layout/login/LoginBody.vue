<script setup lang="ts">
import { useAuthStore } from "@/store/auth.store";
const authStore = useAuthStore();
</script>

<template>
	<div class="w-[50%]">
		<!-- Error message display -->
		<div v-if="authStore.errorMessage" class="text-red-500 flex justify-center mb-4">
			{{ authStore.errorMessage }}
		</div>

		<div class="w-full flex flex-col justify-center items-center gap-5">
			<!-- Login -->
			<LayoutLoginForm v-if="authStore.isFormOpen" />

			<!-- Registration -->
			<LayoutLoginRegistrationForm v-if="!authStore.isFormOpen" />
		</div>
	</div>
</template>

<style scoped></style>