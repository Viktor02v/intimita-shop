import { useQuery } from "@tanstack/vue-query";
import { DB_ID, COLLECTION_ITEMS } from "@/app.constants";
import { DB } from "@/lib/appwrite";

export function useGetProduct(productId:string) {
return useQuery({
	queryKey: ["product", productId ],
	queryFn: async () => {
		return DB.getDocument(DB_ID, COLLECTION_ITEMS, productId);
	},
	select: (data) => data,
});
}
