import { useMutation, useQueryClient } from "@tanstack/vue-query";
import { DB } from "~/lib/appwrite";
import {
  DB_ID,
  COLLECTION_SUBSCRIPTION,
  COLLECTION_CART,
  COLLECTION_FAVORITES,
} from "~/app.constants";
import type { Product } from "~/types/product.type";
import { v4 as uuidv4 } from "uuid";

export function useAddToWishList() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["create-favorite"],
    mutationFn: async (item: Product) => {
      try {
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
        console.log("Creating favorite with data:", newProduct);

        const response = await DB.createDocument(
          DB_ID,
          COLLECTION_FAVORITES,
          item.$id,
          newProduct
        );

        if (!response.$id) {
          throw new Error("Failed to create favorite: Missing favorite ID");
        }

        return response;
      } catch (error) {
        console.error("Error creating favorite in Appwrite:", error);
        throw error; // Propagate the error for onError to handle
      }
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries(["favorites"]);
      console.log("Favorite created successfully:", data);
    },
    onError: (error) => {
      console.error("Error creating favorite:", error);
    },
  });
}
export function useDeleteToWishList() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["delete-favorite"],
    mutationFn: async (item: Product) => {
      try {
        const response = await DB.deleteDocument(
          DB_ID,
          COLLECTION_FAVORITES,
          item.$id
        );

        return response;
      } catch (error) {
        console.error("Error creating favorite in Appwrite:", error);
        throw error; // Propagate the error for onError to handle
      }
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries(["favorites"]);
      console.log("Favorite created successfully:", data);
    },
    onError: (error) => {
      console.error("Error creating favorite:", error);
    },
  });
}
