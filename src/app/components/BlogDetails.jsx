
import Date from "./DateFormat";
const url = `${process.env.HOST_API_URL}/posts`

export async function fetchBlogByID(id) {
    const response = await fetch(`${url}/${id}`)
    const blog = await response.json()
    //here we return promise
    return blog;
}



export default async function BlogDetails({ id }) {
    const blog = await fetchBlogByID(id)
    return <div className="p-4 border border-slate-300">
        <div className="p-4 font-bold text-4xl">{blog.title}</div>
        <div className="p-4">{blog.introduction}</div>
        <div className="p-4" dangerouslySetInnerHTML={{ __html: blog.description }}></div>
        <div className="p-4">created by :- {blog.authorname} ({blog.authortitle})</div>
        <div className="p-4">published on :-  <Date dateString={blog.createdAt} /></div>
    </div>

}