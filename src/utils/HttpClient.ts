import axios from 'axios';

export const httpGet = async (url: string) => {
    return await axios.get(url);
}

export const httpPost = async (url: string, data: any) => {
    return await axios.post(url, data);
}