import { reactive, computed } from "vue";
import { useMutation, useQueryClient } from "@tanstack/vue-query";
import { DB } from "~/lib/appwrite";
import { DB_ID, COLLECTION_CART } from "~/app.constants";
import type { Product } from "~/types/product.type";
import {useSidebarStore} from "@/store/sidebar.store"


const cartMap = reactive<Record<string, boolean>>({});

export function useAddToCart() {
  const queryClient = useQueryClient();

  const sidebarStore = useSidebarStore()

  // Add to Wish List
  const addToCart = useMutation({
    mutationKey: ["create-item-in-cart"],
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
        COLLECTION_CART,
        item.$id,
        newProduct
      );

      if (!response.$id) {
        throw new Error("Failed to create favorite: Missing favorite ID");
      }

      cartMap[item.$id] = true; // Update reactive map
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["cart-products"]);
		sidebarStore.toggleCartOpen()
    },
  });

  // Delete from Wish List
  const deleteFromCart = useMutation({
    mutationKey: ["delete-from-cart"],
    mutationFn: async (item: Product) => {
      const response = await DB.deleteDocument(
        DB_ID,
        COLLECTION_CART,
        item.$id
      );

      cartMap[item.$id] = false; // Update reactive map
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["cart-products"]);
    },
  });

  // Check if a product is a favorite
  const checkIsInCart = (mealId: string | undefined) => {
    if (!mealId) return false;
    return cartMap[mealId] || false;
  };

  return {
	cartMap,
	addToCart,
	deleteFromCart,
	checkIsInCart,
  };
}