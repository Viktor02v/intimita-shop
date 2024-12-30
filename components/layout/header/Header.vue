<script setup lang="ts">

</script>

<template>
	<div class="fixed top-0 left-0 min-h-[120px] max-h-[120px] bg-black w-full">
		<div class="flex items-cetner min-h-[120px] max-h-[120px] px-[85px] justify-between ">
			<div class="flex items-center text-[26px] hover:text-[#FFD095] text-[#989898]">
				<Icon name="iconamoon:search-thin" />
			</div>

			<LayoutHeaderMenu/>

			<div class="flex items-center gap-[30px] text-[26px] transition-all duration-200 ease-out text-[#989898]">
				<Icon name="fluent:person-32-light" class="hover:text-[#FFD095]"/>
				<Icon name="mdi-light:heart" class="hover:text-[#FFD095]" />
				<Icon name="hugeicons:shopping-basket-01" class="hover:text-[#FFD095]" />
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>