import BlogDetails from "@/app/components/BlogDetails";
export default function PostsDetailsPage({ params: { id } }) {
    return<>
        <BlogDetails id={id} />
    </>

}