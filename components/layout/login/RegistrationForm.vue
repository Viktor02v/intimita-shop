<script setup lang="ts">
import { useAuthStore } from "@/store/auth.store";
import { useRegister } from "~/composables/useRegister";


const { mutate: registerMutate } = useRegister();
const authStore = useAuthStore();

const register = async () => {
	registerMutate({
		email: authStore.emailRef,
		password: authStore.passwordRef,
		name: authStore.nameRef,
	});
	if (authStore.errorMessage) {
		authStore.errorMessage =
			"All fields are required and must be unique. Please check your credentials";
	}
};
</script>

<template>
	<form class="w-full">
		<UiInput placeholder="First name" type="text" class="input" />
		<UiInput placeholder="Second name" type="text" class="input" />

		<UiInput v-model="authStore.emailRef" placeholder="Email" type="email" class="input" />
		<UiInput v-model="authStore.passwordRef" placeholder="Password" type="password" class="input" />
		<UiInput v-model="authStore.nameRef" placeholder="Name" type="text" class="input" />

		<div class="w-full flex flex-col justify-center items-center gap-5">
			<LayoutLoginForgot />
			<LayoutLoginButton type="button" @click="register">
				Register
			</LayoutLoginButton>
		</div>
	</form>
</template>

<style scoped>
.input {
	@apply mb-4 placeholder:text-gray-300 placeholder:text-[12px] text-black border-b border-gray-300 focus-visible:ring-0 focus:outline-none;
}
</style>