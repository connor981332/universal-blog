import Post from "../../src/models/post";

export default function MobilePostPreview({ post }: { post: Post }) {
    return (
        <div className="block md:hidden">
            <div className="flex justify-center">
                <div className="mb-4 mt-4 bg-red-50  w-3/4">
                    <div className="h-32 bg-blue-500"></div>
                    <div className="h-32 bg-green-500">
                        <p>{post.title}</p>
                        <p>{post.category}</p>
                        <p>{post.createdAt.toDateString()}</p>
                    </div>
                </div>
            </div>
        </div >
    );
}