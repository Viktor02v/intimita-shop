<script setup lang="ts"></script>

<template>


	<section class="relative w-full h-[100vh]">
		<LayoutHeader />
		<div class="w-full mt-[80px]">
			<slot />
		</div>
		<LayoutFooter />

	</section>

</template>
<style scoped></style>
