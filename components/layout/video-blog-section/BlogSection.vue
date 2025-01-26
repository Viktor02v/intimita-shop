<script setup lang="ts">
import {
	BLOG_HOW_CHOOSE_DATA,
	BLOG_AROMATHERAPY_DATA,
	BLOG_COZINESS_DATA,
	BLOG_BENEFITS_DATA,
} from "./blog.data";
import { ARROW_DATA } from "../arrow/arrow.data";
</script>

<template>
	<div class="w-full">
		<div class="w-full flex flex-col md:flex-row justify-between">
			<!-- BLOG_HOW_CHOOSE_DATA -->
			<div v-for="item in BLOG_HOW_CHOOSE_DATA" :key="item.title"
				class="flex justify-center mb-4 md:mb-0 w-full md:w-1/4">
				<LayoutVideoBlogSectionBlogCard :title="item.title" :subtitle="item.subtitle" :icon="item.icon"
					:video_url="item.foto_url" :url="item.url" />
			</div>

			<!-- BLOG_AROMATHERAPY_DATA -->
			<div v-for="item in BLOG_AROMATHERAPY_DATA" :key="item.title"
				class="flex justify-center mb-4 md:mb-0 w-full md:w-1/4">
				<LayoutVideoBlogSectionBlogCard :title="item.title" :subtitle="item.subtitle" :icon="item.icon"
					:video_url="item.foto_url" :url="item.url" />
			</div>

			<!-- BLOG_COZINESS_DATA -->
			<div v-for="item in BLOG_COZINESS_DATA" :key="item.title"
				class="flex justify-center mb-4 md:mb-0 w-full md:w-1/4">
				<LayoutVideoBlogSectionBlogCard :title="item.title" :subtitle="item.subtitle" :icon="item.icon"
					:video_url="item.foto_url" :url="item.url" />
			</div>

			<!-- BLOG_BENEFITS_DATA -->
			<div v-for="item in BLOG_BENEFITS_DATA" :key="item.title"
				class="flex justify-center mb-4 md:mb-0 w-full md:w-1/4">
				<LayoutVideoBlogSectionBlogCard :title="item.title" :subtitle="item.subtitle" :icon="item.icon"
					:video_url="item.foto_url" :url="item.url" />
			</div>
		</div>
	</div>
</template>

<style scoped></style>
