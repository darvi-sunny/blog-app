import BlogUpdate from "@/app/components/BlogUpdate";

export default function EditBlogDetails({ params: { id } }) {
    return <BlogUpdate id={id}/>
}