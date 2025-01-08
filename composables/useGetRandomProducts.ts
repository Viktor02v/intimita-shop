import { useQuery } from "@tanstack/vue-query";
import { DB_ID, COLLECTION_ITEMS } from "@/app.constants";
import { DB } from "@/lib/appwrite";

export function useGetRandomProducts(limit = 4) {
  return useQuery({
    queryKey: ["random-products"],
    queryFn: async () => {
      const allProducts = await DB.listDocuments(DB_ID, COLLECTION_ITEMS);
      const shuffled = allProducts.documents.sort(() => 0.5 - Math.random());
      return shuffled.slice(0, limit);
    },
  });
}
