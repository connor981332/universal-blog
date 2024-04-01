"use client";
import { useState, useEffect } from "react";
import * as universalBlogAPI from "../src/apis/universalBlogApi";

export default function Page() {
    var [posts, setPosts] = useState({});

    const loadPosts = async () => {
        const recentPosts = await universalBlogAPI.getRecentPosts(1, 10);
        setPosts(recentPosts);
    };
    
    useEffect(() => {
        loadPosts();
    }, []);
    return <>
        <h1>Welcome to my blog!!!!!! 😀</h1>
        <h2>It's a work in progress, but I promise something neat is coming!</h2>
        <p>Here are the posts:</p>
        <>{JSON.stringify(posts)}</>
    </>
}