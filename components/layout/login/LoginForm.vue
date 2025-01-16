<script setup lang="ts">
import { useAuthStore } from "@/store/auth.store";
import { useLogin } from "~/composables/useLogin";

const { mutate: loginMutate } = useLogin();
const authStore = useAuthStore();



const login = async () => {
	loginMutate({ email: authStore.emailRef, password: authStore.passwordRef });
	if (authStore.errorMessage) {
		authStore.errorMessage = "Check your credentials";
	}
};
</script>

<template>
	<form class="w-full">
		<UiInput v-model="authStore.emailRef" placeholder="Email" type="text" class="input" />
		<UiInput v-model="authStore.passwordRef" placeholder="Password" type="password" class="input" />

		<div class="w-full flex flex-col justify-center items-center gap-5">
			<LayoutLoginForgot />
			<LayoutLoginButton type="button" @click="login">
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
