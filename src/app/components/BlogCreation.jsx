import { redirect } from "next/navigation";

const url = `${process.env.HOST_API_URL}/posts`
export default function BlogCreation() {
    const createblog = async (formData) => {
        'use server'
        
        const formDataJson = {
            title: formData.get('title'),
            introduction: formData.get('introduction'),
            description: formData.get('description'),
            authorname: formData.get('authorname'),
            authortitle: formData.get('authortitle'),
            isPublished: JSON.parse('true'),
        }
        const res = await fetch(`${url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formDataJson)
        })
        redirect("/dashboard")

    }

    return <><div>
        <h1 className="font-bold text-2xl py-3">Create Blog</h1>
        <form action={createblog} className="flex flex-col gap-3">
            <label className="px-1 py-1">Blog Title :</label>
            <input type="text" name="title" placeholder="Enter Blog Title" required className="border border-slate-500 px-8 py-2"/>
            <label className="px-1 py-1">Introduction :</label>
            <textarea name="introduction" placeholder="Enter Blog Intro" required className="border border-slate-500 px-8 py-2"/>
            <label className="px-1 py-1">Description :</label>
            <textarea name="description" placeholder="Enter Blog Description" required className="border border-slate-500 px-8 py-2"/>
            <label className="px-1 py-1">Author Name :</label>
            <input type="text" name="authorname" placeholder="Enter Author Name" required className="border border-slate-500 px-8 py-2"/>
            <label className="px-1 py-1">Author Title :</label>
            <input type="text" name="authortitle" placeholder="Enter Author Title" required className="border border-slate-500 px-8 py-2"/>           
            <input type="submit" className="bg-green-600 font-bold text-white py-3 px-6 w-fit"/>
        </form>
    </div>
    </>
}