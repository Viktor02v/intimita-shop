import { useQuery } from "@tanstack/vue-query";
import { DB_ID, COLLECTION_BLOGS } from "@/app.constants";
import { DB } from "@/lib/appwrite";

export function useGetBlog(blogId:string) {
return useQuery({
	queryKey: ["blog", blogId ],
	queryFn: async () => {
		return await DB.getDocument(DB_ID, COLLECTION_BLOGS, blogId);
	},
	select: (data) => data,
});
}


