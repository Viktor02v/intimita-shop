import { useQuery } from "@tanstack/vue-query";
import { DB_ID, COLLECTION_ITEMS } from "@/app.constants";
import { DB } from "@/lib/appwrite";

export function useGetRandomListCandles() {
  return useQuery({
    queryKey: ["random-products-list-candles"], // Add candlesType as a dependency
    queryFn: async () => {
      const allProducts = await DB.listDocuments(DB_ID, COLLECTION_ITEMS);

      // Shuffle products randomly
      const shuffled = allProducts.documents;

      // Filter products based on candlesType

      const candles = shuffled.filter((product) => product.type === "candle");

      return candles;
    },
  });
}
