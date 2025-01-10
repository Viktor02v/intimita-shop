<script setup lang="ts">
import { defineProps } from "vue";
import { useMealMutations } from "@/composables/useCheckFavorites";
import { useFavorites } from "~/composables/useAddToWishList";
import { useGetFavoriteProducts } from "@/composables/useGetFavoriteProducts";
import type { Product } from "~/types/product.type";

const { toggleFavoriteMutation, favoriteMap, favorites } = useMealMutations();

const { data: favoriteProducts = ref([]) as Ref<Product[]> } =
  useGetFavoriteProducts();
const { checkIsFavorite, addToWishListMutation, deleteFromWishListMutation } =
  useFavorites();


const props = defineProps({
  item: {
    type: Object as () => Product,
    required: true,
  },
});

onMounted(() => {
  if (Array.isArray(favoriteProducts.value)) {
    favoriteProducts.value.forEach((product) => {
      favoriteMap.value[product.$id] = true;
    });
  }
});

watch(
  () => favoriteProducts.value,

  (newData) => {
    if (Array.isArray(newData)) {
      newData.forEach((product) => {
        favoriteMap.value[product.$id] = true;
      });
    }
  },
  { immediate: true }
);
</script>

<template>
  <button
    v-if="props.item"
    @click.prevent="toggleFavoriteMutation.mutate(props.item)"
    class="absolute right-[22px] text-[25px] top-[19px]"
    type="button"
  >
    <Icon
      :name="checkIsFavorite(props.item?.$id) ? 'mdi:heart' : 'mdi-light:heart'"
    />
  </button>
</template>

<style scoped>

</style>
