import { useQuery } from "@tanstack/vue-query";
import { DB_ID, COLLECTION_ITEMS } from "@/app.constants";
import { DB } from "@/lib/appwrite";

export function useGetRandomListSelfCare() {
  return useQuery({
    queryKey: ["random-products-list-self-care"], // Add candlesType as a dependency
    queryFn: async () => {
      const allProducts = await DB.listDocuments(DB_ID, COLLECTION_ITEMS);

      // Shuffle products randomly
      const shuffled = allProducts.documents.sort(() => Math.random() - 0.5);

      // Filter products based on candlesType

      const selfCare = shuffled.filter(
        (product) => product.type === "self-care"
      );

      return selfCare;
    },
  });
}
