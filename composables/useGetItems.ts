import { useQuery } from "@tanstack/vue-query";
import { DB_ID, COLLECTION_ITEMS } from "@/app.constants";
import { DB } from "@/lib/appwrite";

export function useGetItemse() {
  return useQuery({
    queryKey: ["items"],
    queryFn: async () => {
      return DB.listDocuments(DB_ID, COLLECTION_ITEMS);
    },
    select: (data) => data.documents,
  });
}
