import { useQuery } from "@tanstack/vue-query";
import { DB_ID, COLLECTION_ITEMS } from "@/app.constants";
import { DB } from "@/lib/appwrite";
import type { Product } from "@/types/product.type";

export function useGetProducts(productType: string) {
return useQuery<Product[]>({
   queryKey: ["products", productType],
   queryFn: async (): Promise<Product[]> => {
      try {
      const data = await DB.listDocuments(DB_ID, COLLECTION_ITEMS);

      if (!data.documents || !Array.isArray(data.documents)) {
         throw new Error("Invalid data format");
      }

        // Filter the data by the provided product type
      return data.documents.filter(
         (product: Product) => product.type === productType
      );
      } catch (error) {
      console.error(`Error fetching ${productType}:`, error);
      throw new Error(`Unable to fetch ${productType}`);
      }
   },
    staleTime: 1000 * 60 * 5, 
   retry: 2, 
});
}
