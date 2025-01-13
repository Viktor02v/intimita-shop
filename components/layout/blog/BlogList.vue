<script setup lang="ts">
import { useGetBlogs } from "@/composables/useGetBlogs";

const { data: blogs } = useGetBlogs();
</script>

<template>
		<div class="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10">
			<div v-for="blog in blogs" :key="blog.$id" class="mb-8">
				<LayoutBlogCard :item="blog"/>
			</div>
		</div>
</template>

<style scoped>

</style>