<script setup lang="ts">
import { useGetBlog } from "@/composables/useGetBlog"

const route = useRoute()
const blogId = route.params.id

const { data: blog, isPending, isError } = useGetBlog(blogId);

</script>

<template>
	<div class="w-full">
		<div v-if="isPending">Loading blogs...</div>
		<div v-else-if="isError">Error loading blogs</div>
		<div v-else>

			<div class="w-full">
				<LayoutAboutInfoBlock :view="false" :img="blog?.foto_url[0]" :img-backup="blog?.title[0]"
					:title="blog?.title[0]" :content="blog?.description[0]" />

				<LayoutAboutInfoBlock :view="true" :img="blog?.foto_url[1]" :img-backup="blog?.title[1]"
					:title="blog?.title[1]" :content="blog?.description[1]" />

				<LayoutAboutBilboard :img="blog?.foto_url[1]" :img-backup="blog?.title[1]" />


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