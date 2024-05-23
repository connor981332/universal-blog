'use server';
import Header from '../components/Header';
import NavBar from '../components/NavBar/NavBar';
import PostPreview from '../components/PostPreview/PostPreview';
import Post from '../src/models/post';
import * as universalBlogAPI from '../src/apis/universalBlogApi';

// export default async function Page() {
//     let postsResponse = null;
//     try {
//         postsResponse = await universalBlogAPI.getRecentPosts(1, 10);
//     } catch (error) {
//         console.error(error);
//     }

//     const posts = [];

//     for (const postJson of postsResponse.data.posts) {
//         posts.push(Post.fromJson(postJson));
//     }

//     return <>
//         <Header/>
//         <NavBar/>
//         {posts.map((post, index) => (
//             <div key={index}>
//                 <PostPreview post={post}/>
//             </div>
//         ))}
//     </>
// }

export default async function Page() {
    return <>
        <h1>This page is a work in progress</h1>
    </>
}