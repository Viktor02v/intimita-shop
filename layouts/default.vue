<script setup lang="ts"></script>

<template>


	<section class="relative w-[100vw] h-[100vh]">
		<LayoutHeader />
		<div class="w-[100vw] mt-[120px]">
			<slot />
		</div>
		<LayoutFooter />

	</section>

</template>
<style scoped></style>
