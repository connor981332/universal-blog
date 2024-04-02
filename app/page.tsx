'use server';
import * as universalBlogAPI from '../src/apis/universalBlogApi';

export default async function Page() {
    const posts = await universalBlogAPI.getRecentPosts(1, 10);
    return <>
        <h1>Welcome to my blog!!!!!! 😀</h1>
        <div className="px-4 shadow-xl flex">
            <p>Hello world</p>
        </div>
        <h2>It's a work in progress, but I promise something neat is coming!</h2>
        <p>Here are the posts:</p>
        <>{JSON.stringify(posts.data)}</>
    </>
}