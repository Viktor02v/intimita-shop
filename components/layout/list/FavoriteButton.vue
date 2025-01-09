<script setup lang="ts">
import { defineProps } from "vue";
import { useMealMutations } from "@/composables/useCheckFavorites";
import { useAddToWishList } from "~/composables/useAddToWishList";
import type { Product } from "~/types/product.type";

const { toggleFavoriteMutation, favoriteMap, favorites } = useMealMutations();
const { mutate, isPending, isError } = useAddToWishList();

const props = defineProps({
  item: {
    type: Object as () => Product,
    required: true,
  },
});
const checkIsFavorite = (mealId: string | undefined) => {
  if (!mealId) return false; // Return false if mealId is undefined
  return favoriteMap.value[mealId] || false;
};

onMounted(() => {
  console.log(props.item);
});
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

<style scoped></style>
