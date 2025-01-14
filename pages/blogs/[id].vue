<script setup lang="ts">
import { useGetBlog } from "@/composables/useGetBlog"

const route = useRoute();
const blogId = route.params.id;

const { data: blog, isPending: isPendingBlog, isError: isErrorBlog } = useGetBlog(blogId);

</script>

<template>
	<div class="w-full">
		<!-- Loading State -->
		<div v-if="isPendingBlog">Loading blog...</div>

		<!-- Error State -->
		<div v-else-if="isErrorBlog">Error loading blog</div>

		<!-- Ready State -->
		<div v-else>
			<div class="w-full">
				<!-- Blog Block #1 -->
				<LayoutAboutInfoBlock :view="false" :img="blog?.foto_url[0]" :img-backup="blog?.title[0]"
					:title="blog?.title[0]" :content="blog?.description[0]" />
					
				<!-- Blog Block #2 -->
				<LayoutAboutInfoBlock :view="true" :img="blog?.foto_url[1]" :img-backup="blog?.title[1]"
					:title="blog?.title[1]" :content="blog?.description[1]" />

				<!-- Blog Bilboard -->
				<LayoutAboutBilboard :img="blog?.foto_url[1]" :img-backup="blog?.title[1]" />

				<!-- Blog Block #3 -->
				<LayoutAboutInfoBlock :view="false" :img="blog?.foto_url[2]" :img-backup="blog?.title[2]"
					:title="blog?.title[2]" :content="blog?.description[2]" />
			</div>

			<!-- Subscription -->
			<LazyLayoutSubscription />

		</div>
	</div>
</template>

<style scoped>

</style>