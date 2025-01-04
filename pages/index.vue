<script setup lang="ts">
import { TITLES_COLLAGE_DATA } from "../components/layout/video-blog-section/collage.data";
import { TITLES_BLOG_DATA } from "../components/layout/video-blog-section/blog.data";
</script>

<template>
  <div class="w-[100vw]">
    <!-- Slider -->
    <LayoutSlider />

    <LayoutVideoBlogSectionCollage :title="TITLES_COLLAGE_DATA[0].title" />

    <LayoutAccordionComponent />

    <LayoutVideoBlogSectionBlog :title="TITLES_BLOG_DATA[0].title" />
  </div>
</template>

<style scoped></style>
