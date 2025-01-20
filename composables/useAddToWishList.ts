import { reactive, computed } from "vue";
import { useMutation, useQueryClient } from "@tanstack/vue-query";
import { DB } from "~/lib/appwrite";
import { DB_ID, COLLECTION_FAVORITES } from "~/app.constants";
import type { Product } from "~/types/product.type";

const favoriteMap = reactive<Record<string, boolean>>({});

export function useFavorites() {
  const queryClient = useQueryClient();

    // Function to fetch the cart products on load and initialize cartMap
	 const initializeFavoritesMap = async () => {
		try {
		  const FavoriteItems = await DB.listDocuments(DB_ID, COLLECTION_FAVORITES);
		  FavoriteItems.documents.forEach((item: Product) => {
			favoriteMap[item.$id] = true; // Set the items as present in the cart
		  });
		} catch (error) {
		  console.error("Error initializing cart map:", error);
		}
	 };
  
	 onMounted(() => {
		initializeFavoritesMap();
	 });

  // Add to Wish List
  const addToWishListMutation = useMutation({
    mutationKey: ["create-favorite"],
    mutationFn: async (item: Product) => {
      const newProduct = {
        name: item.name,
        price: item.price,
        foto_url: item.foto_url,
        type: item.type,
        isOnSale: item.isOnSale,
        onSalePrice: item.onSalePrice,
        description: item.description,
        selfCareType: item.selfCareType,
        diffusersType: item.diffusersType,
        candleType: item.candleType,
        giftsType: item.giftsType,
      };

      const response = await DB.createDocument(
        DB_ID,
        COLLECTION_FAVORITES,
        item.$id,
        newProduct
      );

      if (!response.$id) {
        throw new Error("Failed to create favorite: Missing favorite ID");
      }

      favoriteMap[item.$id] = true; // Update reactive map
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["favorite-products"]);
    },
  });

  // Delete from Wish List
  const deleteFromWishListMutation = useMutation({
    mutationKey: ["delete-favorite"],
    mutationFn: async (item: Product) => {
      const response = await DB.deleteDocument(
        DB_ID,
        COLLECTION_FAVORITES,
        item.$id
      );

      favoriteMap[item.$id] = false; // Update reactive map
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["favorite-products"]);
    },
  });

  // Check if a product is a favorite
  const checkIsFavorite = (mealId: string | undefined) => {
    if (!mealId) return false;
    return favoriteMap[mealId] || false;
  };

  return {
    favoriteMap,
    addToWishListMutation,
    deleteFromWishListMutation,
    checkIsFavorite,
  };
}
