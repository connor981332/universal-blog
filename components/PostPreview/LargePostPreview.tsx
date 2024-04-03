import Post from "../../src/models/post";

export default function LargePostPreview({ post }: { post:Post }) {
    return (
        <div className="hidden md:block">
            <div className="flex justify-center mb-4 mt-4">
                <div className=" w-80 h-48 bg-blue-500 mr-4"></div>
                <div className="w-80 h-48 bg-green-500">
                    <p>{post.title}</p>
                    <p>{post.category}</p>
                    <p>{post.createdAt.toDateString()}</p>
                </div>
            </div>
        </div >
    );
}