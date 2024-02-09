import { redirect } from "next/navigation";

const url = `${process.env.HOST_API_URL}/posts`

export async function fetchBlogByID(id) {
    const response = await fetch(`${url}/${id}`, { cache: "no-store" })
    const blog = await response.json()
    //here we return promise
    return blog;
}

export default async function BlogUpdate({ id }) {
    const updateblog = async (formData) => {
        'use server'

        const formDataJson = {
            title: formData.get('title'),
            introduction: formData.get('introduction'),
            description: formData.get('description'),
            authorname: formData.get('authorname'),
            authortitle: formData.get('authortitle'),
            isPublished: JSON.parse('true'),
        }
        const res = await fetch(`${url}/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formDataJson)
        })
        redirect("/dashboard")

    }

    const blog = await fetchBlogByID(id)

    return <><div>
        <h1 className="font-bold text-2xl py-3">Update Blog</h1>
        <form action={updateblog} className="flex flex-col gap-3">
            <label className="px-1 py-1">Blog Title :</label>
            <input type="text" name="title" placeholder="Enter Blog Title" required defaultValue={blog.title} className="border border-slate-500 px-8 py-2" />
            <label className="px-1 py-1">Introduction :</label>
            <textarea name="introduction" placeholder="Enter Blog Intro" required defaultValue={blog.introduction} className="border border-slate-500 px-8 py-2" />
            <label className="px-1 py-1">Description :</label>
            <textarea name="description" placeholder="Enter Blog Description" required defaultValue={blog.description} className="border border-slate-500 px-8 py-2" />
            <label className="px-1 py-1">Author Name :</label>
            <input type="text" name="authorname" placeholder="Enter Author Name" required defaultValue={blog.authorname} className="border border-slate-500 px-8 py-2" />
            <label className="px-1 py-1">Author Title :</label>
            <input type="text" name="authortitle" placeholder="Enter Author Title" required defaultValue={blog.authortitle} className="border border-slate-500 px-8 py-2" />
            <input type="submit" className="bg-green-600 font-bold text-white py-3 px-6 w-fit" />
        </form>
    </div>
    </>
}