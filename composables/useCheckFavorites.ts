import { ref } from "vue";
import { useFavorites } from "~/composables/useAddToWishList";
import { useMutation, useQueryClient } from "@tanstack/vue-query";
import type { Product } from "~/types/product.type";

export function useMealMutations() {
  const { checkIsFavorite, addToWishListMutation, deleteFromWishListMutation } =
    useFavorites();

  const queryClient = useQueryClient();

  // Reactive state
  const favoriteMap = ref<Record<string, boolean>>({});
  //   const cartMap = ref<Record<string, boolean>>({});
  const favorites = ref<Product[]>([]);

  // Helper functions
  const manageFavorite = async (product: Product, isFavorite: boolean) => {
    try {
      return isFavorite
        ? await addToWishListMutation.mutate(product)
        : await deleteFromWishListMutation.mutate(product);
    } catch (error) {
      console.error("Error managing favorite:", error);
      throw error;
    }
  };

  // Toggle favorite mutation
  const toggleFavoriteMutation = useMutation({
    mutationFn: async (product: Product) => {
      const isFavorite = favoriteMap.value[product.$id];
      await manageFavorite(product, isFavorite);
      return !isFavorite;
    },
    onMutate: async (meal: Product) => {
      const currentFavoriteState = favoriteMap.value[meal.$id];
      favoriteMap.value[meal.$id] = !currentFavoriteState;

      if (!currentFavoriteState) {
        favorites.value = [...favorites.value, meal];
      } else {
        favorites.value = favorites.value.filter((fav) => fav.$id !== meal.$id);
      }

      console.log("Optimistic update for favorite:", meal.$id);
    },
    onError: (error, meal) => {
      console.error("Error toggling favorite:", error);
      favoriteMap.value[meal.$id] = !favoriteMap.value[meal.$id];
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["favorite-products"]);
    },
  });

  return {
    toggleFavoriteMutation,
    favoriteMap,
    favorites,
  };
}
