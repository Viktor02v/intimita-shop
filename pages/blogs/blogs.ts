
const route = useRoute()
const blogId = route.params.id
const { data: blog, isPending, isError } = useGetBlog(blogId);
export interface Blog {
	view: boolean,
	img:String,
	imgBackup:String,
	title:String,
	content:String,
}

export const BLOGS: Blog[]  = [
	{
		view: false,
		img: blog?.foto_url[0] || null,
		imgBackup:blog?.title[0]|| null,
		title:blog?.title[0] || null,
		content:blog?.description[0] || null,
	},
];