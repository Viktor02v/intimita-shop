<script setup lang="ts">
import { usePasswordReset } from "@/composables/usePasswordReset";
import { useAuthStore } from "@/store/auth.store";

const authStore = useAuthStore();

const { sendResetEmail, errorMessage, successMessage } = usePasswordReset();

function handleSendResetEmail() {
	if (!validateEmail(authStore.emailRef)) {
		errorMessage.value = "Please enter a valid email address.";
		alert('Please enter a valid email address.')
		return;
	}
	sendResetEmail.mutate(authStore.emailRef);
}

function validateEmail(email: string) {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
}
</script>

<template>
	<form class="w-full" @submit.prevent="handleSendResetEmail">
		<UiInput v-model="authStore.emailRef" placeholder="Email" type="email" class="input" />
		<div class="text-[9px]">
			<p v-if="successMessage" class="">{{ successMessage }}</p>
			<p v-if="errorMessage" class="">{{ errorMessage }}</p>
		</div>


		<div class="mt-[40px]">
			<div class="w-full flex flex-col justify-center items-center gap-5">
				<LayoutLoginButton type="submit">
					Login
				</LayoutLoginButton>
			</div>
		</div>
	</form>
</template>

<style scoped>
.input {
	@apply mb-1 placeholder:text-gray-300 placeholder:text-[12px] text-black border-b border-gray-300 focus-visible:ring-0 focus:outline-none;
}
</style>