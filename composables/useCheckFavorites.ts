import { ref } from "vue";
import { useAddToWishList } from "~/composables/useAddToWishList";
import { useMutation, useQueryClient } from "@tanstack/vue-query";
import type { Product } from "~/types/product.type";

export function useMealMutations() {
  const {
    mutate: addToWishList,
    isPending: isPendingAdd,
    isError: isErrorAdd,
  } = useAddToWishList();
  const {
    mutate: deleteToWishList,
    isPending: isPending,
    isError: isErrorDelete,
  } = useDeleteToWishList();
  const queryClient = useQueryClient();

  // Reactive state
  const favoriteMap = ref<Record<string, boolean>>({});
  //   const cartMap = ref<Record<string, boolean>>({});
  const favorites = ref<Product[]>([]);

  // Helper functions
  const manageFavorite = async (product: Product, isFavorite: boolean) => {
    try {
      return isFavorite
        ? await addToWishList(product)
        : await deleteToWishList(product);
    } catch (error) {
      console.error("Error managing favorite:", error);
      throw error;
    }
  };

  //   const manageCart = async (product: Product, isInCart: boolean) => {
  //     try {
  //       return isInCart
  //         ? await addToWishList(product)
  //         : await deleteToWishList(product);
  //     } catch (error) {
  //       console.error("Error managing cart:", error);
  //       throw error;
  //     }
  //   };

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
      queryClient.invalidateQueries(["favorites"]);
    },
  });

  //   // Toggle cart mutation
  //   const toggleCartMutation = useMutation({
  //     mutationFn: async (product: Product) => {
  //       const isInCart = cartMap.value[product.$id];
  //       await manageCart(product.$id, isInCart);
  //       return !isInCart;
  //     },
  //     onMutate: async (meal: Product) => {
  //       cartMap.value[meal.$id] = !cartMap.value[meal.$id];
  //     },
  //     onError: (error, meal) => {
  //       console.error("Error toggling cart:", error);
  //       cartMap.value[meal.$id] = !cartMap.value[meal.$id];
  //     },
  //     onSettled: () => {
  //       queryClient.invalidateQueries(["cart-products"]);
  //     },
  //   });

  return {
    toggleFavoriteMutation,
    // toggleCartMutation,
    favoriteMap,
    // cartMap,
    favorites,
  };
}
