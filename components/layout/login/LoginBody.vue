<script setup lang="ts">
import { useAppwriteUser } from "@/components/layout/cart/useAppwriteUser"
import { useAuthStore } from "@/store/auth.store";
const authStore = useAuthStore();

const { user, isLoading, error, fetchUser } = useAppwriteUser();
</script>

<template>
	<div class="w-[50%]">
		<!-- Error message display -->
		<div v-if="authStore.errorMessage" class="text-red-500 flex justify-center mb-4">
			{{ authStore.errorMessage }}
		</div>

		<div class="w-full flex flex-col justify-center items-center gap-5">
			<!-- Login Form -->
			<LayoutLoginForm v-if="authStore.isFormOpen && !authStore.isRessetFormOpen && !user" />

			<!-- Registration Form -->
			<LayoutLoginRegistrationForm v-if="!authStore.isFormOpen && !authStore.isRessetFormOpen" />

			<!-- Resset Password Form-->
			<LayoutLoginRessetForm v-if="authStore.isRessetFormOpen" />
		</div>
	</div>
</template>

<style scoped>

</style>