import { httpGet, httpPost } from '../utils/HttpClient';

const universalBlogApiHost = 'localhost:3000';

export const getRecentPosts = async (pageNumber: number, pageSize: number) => {
    return await httpGet(`${universalBlogApiHost}/posts/recent?pageNumber=${pageNumber}&pageSize=${pageSize}`);
}

export const getRecentPostsByCategory = async (category: string, pageNumber: number, pageSize: number) => {

}

export const getCategories = async () => {

}

export const submitPost = async () => {

}