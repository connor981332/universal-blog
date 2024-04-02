'use server';
import Header from '../components/Header';
import NavBar from '../components/NavBar/NavBar';
import PostPreview from '../components/PostPreview';
import * as universalBlogAPI from '../src/apis/universalBlogApi';

export default async function Page() {
    const posts = await universalBlogAPI.getRecentPosts(1, 10);
    return <>
        <Header/>
        <NavBar/>
        <PostPreview/>
        <PostPreview/>
        <PostPreview/>
        <PostPreview/>
        <PostPreview/>
        <PostPreview/>
        <PostPreview/>
    </>
}