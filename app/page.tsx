'use server';
import Header from '../components/header';
import NavBar from '../components/navbar';
import * as universalBlogAPI from '../src/apis/universalBlogApi';

export default async function Page() {
    const posts = await universalBlogAPI.getRecentPosts(1, 10);
    return <>
        <Header/>
        <NavBar/>
    </>
}