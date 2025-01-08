import { useQuery } from "@tanstack/vue-query";
import { DB_ID, COLLECTION_FAVORITES } from "@/app.constants";
import { DB } from "@/lib/appwrite";

export function useGetFavoriteProducts() {
   return useQuery({
      queryKey: ["favorite-products"],
      queryFn: async () => {
         return await DB.listDocuments(DB_ID, COLLECTION_FAVORITES);
      },
		select: (data) => data.documents,
   });
}
