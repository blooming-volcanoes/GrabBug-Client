/* eslint-disable class-methods-use-this */
import axios, { AxiosInstance, AxiosResponse } from "axios";
import { getFromLocalStorage } from "utils/local-storage";

const token = getFromLocalStorage("token");

const axiosConfig = {
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    headers: {
        authorization: token || "",
    },
};

const instance: AxiosInstance = axios.create(axiosConfig);

class Request {
    async get(url: string): Promise<AxiosResponse> {
        return instance.get(url).then((data) => data);
    }

    async post(url: string, body?: any): Promise<AxiosResponse> {
        return instance.post(url, body).then((data) => data);
    }

    async put(url: string, body?: any): Promise<AxiosResponse> {
        return instance.put(url, body).then((data) => data);
    }

    async delete(payload: any): Promise<AxiosResponse> {
        return instance.delete(payload).then((data) => data);
    }
}

const httpReq = new Request();

export default httpReq;
