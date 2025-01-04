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
  <div class="w-[100vw]">
    <div class="w-full flex justify-between">
      <div v-for="item in BLOG_HOW_CHOOSE_DATA" :key="item.title">
        <LayoutVideoBlogSectionBlogCard
          :title="item.title"
          :subtitle="item.subtitle"
          :icon="item.icon"
          :video_url="item.video_url"
          :url="item.url"
        />
      </div>
      <div v-for="item in BLOG_AROMATHERAPY_DATA" :key="item.title">
        <LayoutVideoBlogSectionBlogCard
          :title="item.title"
          :subtitle="item.subtitle"
          :icon="item.icon"
          :video_url="item.video_url"
          :url="item.url"
        />
      </div>
      <div v-for="item in BLOG_COZINESS_DATA" :key="item.title">
        <LayoutVideoBlogSectionBlogCard
          :title="item.title"
          :subtitle="item.subtitle"
          :icon="item.icon"
          :video_url="item.video_url"
          :url="item.url"
        />
      </div>
      <div v-for="item in BLOG_BENEFITS_DATA" :key="item.title">
        <LayoutVideoBlogSectionBlogCard
          :title="item.title"
          :subtitle="item.subtitle"
          :icon="item.icon"
          :video_url="item.video_url"
          :url="item.url"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
