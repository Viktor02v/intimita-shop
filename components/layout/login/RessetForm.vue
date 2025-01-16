<script setup lang="ts">
import { useAuthStore } from "@/store/auth.store";
const authStore = useAuthStore();

import { ref } from "vue";
import { usePasswordReset } from "@/composables/usePasswordReset";

const email = ref("");
const { sendResetEmail, errorMessage, successMessage } = usePasswordReset();
</script>

<template>
	<form class="w-full">
		<UiInput v-model="authStore.emailRef" placeholder="Email" type="email" class="input" />
		<UiInput v-model="authStore.passwordRef" placeholder="New Password" type="password" class="input" />
		<UiInput v-model="authStore.nameRef" placeholder="Confirm Password" type="password" class="input" />

		<div class="w-full flex flex-col justify-center items-center gap-5">
			<LayoutLoginForgot />
			<LayoutLoginButton type="button">
				Login
			</LayoutLoginButton>
		</div>
	</form>
</template>

<style scoped>
.input {
	@apply mb-4 placeholder:text-gray-300 placeholder:text-[12px] text-black border-b border-gray-300 focus-visible:ring-0 focus:outline-none;
}
</style>