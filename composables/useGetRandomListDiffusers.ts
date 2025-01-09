import { useQuery } from "@tanstack/vue-query";
import { DB_ID, COLLECTION_ITEMS } from "@/app.constants";
import { DB } from "@/lib/appwrite";

export function useGetRandomListDiffusers() {
  return useQuery({
    queryKey: ["random-products-list-diffusers"], // Add candlesType as a dependency
    queryFn: async () => {
      const allProducts = await DB.listDocuments(DB_ID, COLLECTION_ITEMS);

      // Shuffle products randomly
      const shuffled = allProducts.documents;

      // Filter products based on candlesType

      const candles = shuffled.filter(
        (product) => product.type === "aroma-diffuser"
      );

      return candles;
    },
  });
}
