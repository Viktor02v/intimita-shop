import { useQuery } from "@tanstack/vue-query";
import { DB_ID, COLLECTION_ITEMS } from "@/app.constants";
import { DB } from "@/lib/appwrite";

export function useGetItemsOnSale() {
  return useQuery({
    queryKey: ["items", "onSale"],
    queryFn: async () => {
      const response = await DB.listDocuments(DB_ID, COLLECTION_ITEMS);
      return response.documents.filter(item => item.isOnSale === true);
    },
    select: (data) => data,
  });
}
