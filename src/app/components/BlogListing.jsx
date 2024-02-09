'use client';
import { Link } from "@nextui-org/react";
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';
import { HiPencilAlt } from "react-icons/hi";
import RemoveBtn from "./BlogDelete";
import Date from "./DateFormat";

const url = `${process.env.HOST_API_URL}/posts`

export async function fetchBlogs() {
    const response = await fetch(url, { cache: "no-store" })
    const blogs = await response.json()
    //here we return promise
    return blogs;
}
export async function deleteBlog(id) {
    const res = await fetch(`${url}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: {}
    })
    const router = useRouter();
    router.replace(router.asPath);
}
const BlogListing = async () => {

    const currentPage = usePathname()
    console.log('Current Page:-' + currentPage)
    const blogs = await fetchBlogs()
    return (
        <>
            {
                blogs.map(blog => {
                    if (currentPage != '/dashboard') {
                        return <div key={blog.id} className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
                            <div>
                                <Link className="font-bold text-2xl" underline="always" href={`/blogs/${blog.id}`}>{blog.title}</Link>
                                <div>{blog.introduction}</div>
                                <div>created by :- {blog.authorname}</div>
                                <div>published on :-  <Date dateString={blog.createdAt} /></div> 
                            </div>

                        </div>
                    }
                    else {
                        return <div key={blog.id}
                            className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
                            <div>
                                <h2 className="font-bold text-2xl">{blog.title}</h2>
                                <div>{blog.introduction}</div>
                                <div>created by :- {blog.authorname}</div>
                                <div>published on :-  <Date dateString={blog.createdAt} /></div> 
                            </div>

                            <div className="flex gap-2">
                                <RemoveBtn id={blog.id} />
                                <Link href={`/dashboard/blogs/edit/${blog.id}`}>
                                    <HiPencilAlt size={24} />
                                </Link>
                            </div>
                        </div>
                    }
                })
            }
        </>
    )
}
export default BlogListing;