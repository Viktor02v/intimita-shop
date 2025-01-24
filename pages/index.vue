<script setup lang="ts">
import { useGetItemsOnSale } from "~/composables/useGetItemsOnSale";
import { TITLES_COLLAGE_DATA } from "../components/layout/video-blog-section/collage.data";
import { TITLES_BLOG_DATA } from "../components/layout/video-blog-section/blog.data";
import { useScreenSize } from "@/composables/useWindowSize";

const { isDesktop, isTablet, isMobile } = useScreenSize();

const { data: items } = useGetItemsOnSale();
</script>

<template>
  <div class="w-[100vw]">
    <!-- Slider -->
    <LazyLayoutSlider />

    <!-- Often buy list -->
    <div class="my-[70px] w-full md:px-[135px]">
      <LazyTItleItem title="People often buy" />
      <LazyLayoutList
        :items="isMobile ? items?.slice(0, 2) : items?.slice(4, 8)"
      />
    </div>

    <!-- Video Section -->
    <LazyLayoutVideoBlogSectionCollage :title="TITLES_COLLAGE_DATA[0].title" />

    <!-- Accordion Questions Section -->
    <LazyLayoutAccordionComponent />

    <!-- Blog Section -->
    <LazyLayoutVideoBlogSectionBlog :title="TITLES_BLOG_DATA[0].title" />

    <!-- Subscription -->
    <LazyLayoutSubscription />
  </div>
</template>

<style scoped></style>
