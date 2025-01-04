<script setup lang="ts">
import { useGetItemsOnSale } from "~/composables/useGetItemsOnSale"
import { TITLES_COLLAGE_DATA } from "../components/layout/video-blog-section/collage.data";
import { TITLES_BLOG_DATA } from "../components/layout/video-blog-section/blog.data";
import TItleItem from "~/components/TItleItem.vue";
const { data: items } = useGetItemsOnSale()
</script>

<template>
	<div class="w-[100vw]">
		<!-- Slider -->
		<LayoutSlider />

		<!-- Often buy list -->
		<div class="my-[70px] w-full px-[135px]">
			<TItleItem title="People often buy"/>
			<LayoutList :items="items?.slice(4, 8)" />
		</div>
    
    <LayoutVideoBlogSectionCollage :title="TITLES_COLLAGE_DATA[0].title" />

    <LayoutAccordionComponent />

    <LayoutVideoBlogSectionBlog :title="TITLES_BLOG_DATA[0].title" />
	</div>

</template>

<style scoped>

</style>
