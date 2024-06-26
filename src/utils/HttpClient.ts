import axios from 'axios';

export const httpGet = async (url: string) => {
    try {
        return await fetch(url, { cache: 'no-store' })
    } catch (error) {
        console.error('Could not get', url);
        throw error;
    }
}

export const httpPost = async (url: string, data: any) => {
    return await axios.post(url, data);
}