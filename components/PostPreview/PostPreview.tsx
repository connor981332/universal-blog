import LargePostPreview from "./LargePostPreview";
import MobilePostPreview from "./MobilePostPreview";
import Post from "../../src/models/post";

export default function PostPreview({ post }: { post:Post }) {
    return (
        <>
            <LargePostPreview post={post} />
            <MobilePostPreview post={post} />
        </>
    );
}