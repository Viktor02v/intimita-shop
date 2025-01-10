import { useQuery } from "@tanstack/vue-query";
import { DB_ID, COLLECTION_ITEMS } from "@/app.constants";
import { DB } from "@/lib/appwrite";

export function useGetSelfCare() {
  return useQuery({
    queryKey: ["self-care"], 
	queryFn: async (): Promise<Product[]> => {
		try {
		const data = await DB.listDocuments(DB_ID, COLLECTION_ITEMS);

		if (!data.documents || !Array.isArray(data.documents)) {
			throw new Error("Invalid data format");
		}

		return data.documents.filter((product: Product) => product.type === "self-care");
		} catch (error) {
		console.error("Error fetching candles:", error);
		throw new Error("Unable to fetch candles");
		}
	},
	 staleTime: 1000 * 60 * 5, 
	retry: 2,
});
}
