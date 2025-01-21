<script setup lang="ts">
import { useGetBlogs } from "@/composables/useGetBlogs";
import { useIsLoadingStore } from "@/store/auth.store";
import { watch } from "vue";

const isLoadingStore = useIsLoadingStore();
const { isPending, isError,  } = useGetBlogs();

</script>

<template>
  <div class="w-full p-10">
    <!-- Show loader if the data is still being fetched -->
    <div v-if="isPending" class="text-center text-lg font-medium">
      Loading blogs...
    </div>

    <!-- Error message -->
    <div v-else-if="isError" class="text-center text-lg font-medium text-red-500">
      Error loading blogs
    </div>

    <!-- Display the blogs list -->
    <LayoutBlogList v-else />
  </div>
</template>
