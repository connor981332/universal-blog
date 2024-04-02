import { httpGet, httpPost } from '../utils/HttpClient';

const universalBlogApiHost = 'http://host.docker.internal:3001';

export const getRecentPosts = async (pageNumber: number, pageSize: number) => {
    return await httpGet(`${universalBlogApiHost}/posts/recent?pageNumber=${pageNumber}&pageSize=${pageSize}`);
}

export const getRecentPostsByCategory = async (category: string, pageNumber: number, pageSize: number) => {

}

export const getCategories = async () => {
    return await httpGet(`${universalBlogApiHost}/categories`);
}

export const submitPost = async () => {

}