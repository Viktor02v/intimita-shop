import { useQuery } from "@tanstack/vue-query";
import { DB_ID, COLLECTION_CART } from "@/app.constants";
import { DB } from "@/lib/appwrite";

export function useGetCartProducts() {
   return useQuery({
      queryKey: ["cart-products"],
      queryFn: async () => {
         return await DB.listDocuments(DB_ID, COLLECTION_CART);
      },
		select: (data) => data.documents,
   });
}
