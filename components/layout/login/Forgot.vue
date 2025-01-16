<script setup lang="ts">
import { useAuthStore } from "@/store/auth.store"

const authStore = useAuthStore();


console.log(authStore.isRessetFormOpen)
</script>

<template>
	<div>
		<p @click="authStore.toggleRessetForm()" class="text-[10px] font-light cursor-pointer">Forgot your password?</p>
	</div>
</template>

<style scoped></style>