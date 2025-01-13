import { useQuery } from "@tanstack/vue-query";
import { DB_ID, COLLECTION_BLOGS } from "@/app.constants";
import { DB } from "@/lib/appwrite";


export function useGetBlogs() {
return useQuery({
    queryKey: ["blogs"], 
   queryFn: async () => {
      try {
      const data = await DB.listDocuments(DB_ID, COLLECTION_BLOGS);

      if (!data.documents || !Array.isArray(data.documents)) {
         throw new Error("Invalid data format");
      }

      return data.documents
      } catch (error) {
      console.error("Error fetching blogs:", error);
      throw new Error("Unable to fetch blogs");
      }
   },

});
}
