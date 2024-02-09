import BlogListing from "../../components/BlogListing"
export default function Dashboard() {
  return <div className="container mx-auto my-10">
    <div className="w-1/2 mx-auto border border-gray-700">     
      <BlogListing />
    </div>
  </div>
  }