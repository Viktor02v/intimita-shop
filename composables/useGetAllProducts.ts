import { useQuery } from "@tanstack/vue-query";
import { DB_ID, COLLECTION_ITEMS } from "@/app.constants";
import { DB } from "@/lib/appwrite";
import type { Product } from "@/types/product.type";

export function useGetAllProducts() {
return useQuery<Product[]>({
    queryKey: ["all-products"], 
   queryFn: async (): Promise<Product[]> => {
      try {
      const data = await DB.listDocuments(DB_ID, COLLECTION_ITEMS);

      if (!data.documents || !Array.isArray(data.documents)) {
         throw new Error("Invalid data format");
      }

      return data.documents
      } catch (error) {
      console.error("Error fetching products:", error);
      throw new Error("Unable to fetch products");
      }
   },
    staleTime: 1000 * 60 * 5, 
   retry: 2,
});
}
