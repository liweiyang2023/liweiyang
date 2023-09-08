import axios, { AxiosResponse, AxiosInstance } from 'axios';

const service: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: 5000,
});

export function httpGet(url: string, params: any = {}): Promise<any> {
    return new Promise((resolve, reject) => {
        service
            .get(url, {
                params: params,
            })
            .then((response: AxiosResponse<any>) => {
                resolve(response.data);
            })
            .catch((err: any) => {
                reject(err);
            });
    });
}

export function httpPost(url: string, data: any = {}, options: any = {}): Promise<any> {
    return new Promise((resolve, reject) => {
        service
            .post(url, data, options)
            .then((response: AxiosResponse<any>) => {
                resolve(response.data);
            })
            .catch((err: any) => {
                reject(err);
            });
    });
}