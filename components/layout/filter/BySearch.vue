<script setup lang="ts">
import { set } from "@vueuse/core";
import { ref, onMounted, watch, watchEffect } from "vue";
import { useSearchStore } from "~/store/search.store";
import { useCloseSidebarIfOpen } from "~/composables/useCloseSidebarIfOpen";

const { closeSidebarIfOpen } = useCloseSidebarIfOpen();

const sidebarStore = useSidebarStore();

const onSearchStore = useSearchStore();

const emit = defineEmits(["updateOrders"]);

const searchData = ref([]);
const searchQuery = ref("");
let closeTimeout: ReturnType<typeof setTimeout> | null = null;

// Props
const props = defineProps<{
  data: any[];
}>();

// Watch for changes in orders prop
watchEffect(() => {
  // If there is text in the search query, keep the search open
  if (searchQuery.value.trim()) {
    onSearchStore.isSearchOpen = true;

    // Clear any previous timeout if there's text
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      closeTimeout = null;
    }
  } else {
    // If the input is empty, set a timeout to close the search after 5 seconds
    if (!closeTimeout) {
      closeTimeout = setTimeout(() => {
        onSearchStore.isSearchOpen = false; // Close the search
        console.log("Search closed due to inactivity with empty input.");
      }, 5000);
    }
  }
});
watch(
  () => onSearchStore.isSearchOpen,
  () => {
    closeSearch();
  }
);

// Filter function
const onSearchQuery = () => {
  if (!searchQuery.value.trim()) {
    console.warn("Search query is empty. No filtering applied.");
    emit("updateOrders", props.data); // Emit all data if search query is empty
    searchData.value = []; // Reset search data
    return;
  }

  const filteredOrders = props.data.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.value.trim().toLowerCase())
  );

  console.log("Search query applied:", searchQuery.value);
  emit("updateOrders", filteredOrders); // Emit the filtered results
  searchData.value = filteredOrders;
};

// Watch for searchQuery changes
watch(searchQuery, (newValue) => {
  if (newValue.trim()) {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      closeTimeout = null;
      console.log("Inactivity timeout cleared as input contains text.");
    }
    onSearchStore.isSearchOpen = true; // Keep search open
  } else {
    // Set close timeout if input is empty
    if (!closeTimeout) {
      closeTimeout = setTimeout(() => {
        searchData.value = [];
        onSearchStore.isSearchOpen = false;
        console.log("Search closed due to inactivity with empty input.");
      }, 5000);
    }
  }
});
const closeSearch = () => {
  onSearchStore.isSearchOpen = false;
};
</script>

<template>
  <section class="w-[90%] flex flex-col justify-end items-end gap-8">
    <!-- Search Input -->
    <div class="flex flex-col items-center space-5 relative">
      <div
        class="flex justify-between border rounded-lg min-w-[280px] max-w-[290px] px-1"
      >
        <input
          @input="onSearchQuery"
          v-model="searchQuery"
          class="bg-transparent border-none outline-none max-h-[35px] placeholder:text-[12px] min-w-[250px] max-w-[250px] p-2"
          type="text"
          placeholder="Search..."
        />
        <div class="font-light text-xl text-center flex items-center">
          <Icon name="ion:search" class="w-5 h-5" />
        </div>
      </div>

      <!-- Search Results -->
      <div
        v-if="onSearchStore.isSearchOpen && searchData.length > 0"
        class="w-full mt-4 absolute top-10 max-h-[30vh] overflow-y-auto scrollbar-none rounded-lg"
      >
        <NuxtLink
          :to="`/products/${item.$id}`"
          v-for="item in searchData"
          :key="item.$id"
          class="flex gap-4 cursor-pointer p-2 border-b border-gray-200 hover:text-[#FFD095] px-4 bg-black z-50"
          @click="
            closeSidebarIfOpen,
              (sidebarStore.isPhoneOpen = false),
              closeSidebarIfOpen()
          "
        >
          <img :src="item.foto_url" class="w-8 h-8 object-contain" alt="" />
          {{ item.name }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
