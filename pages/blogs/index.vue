<script setup lang="ts">
import { useGetBlogs } from "@/composables/useGetBlogs";

const { isPending: isPendingBlogs, isError: isErrorBlogs } = useGetBlogs();
</script>

<template>
	<div class="w-full p-10">
		<div v-if="isPendingBlogs" class="text-center text-lg font-medium">Loading blogs...</div>
		<div v-else-if="isErrorBlogs" class="text-center text-lg font-medium text-red-500">Error loading blogs</div>

		<LayoutBlogList v-else />
	</div>
</template>

<style scoped>

</style>
