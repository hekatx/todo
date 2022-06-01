import Axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { API_URL } from "@/config";
import { storage } from "@/utils";

export const axios = Axios.create({
  baseURL: API_URL,
});

function requestInterceptor(config: AxiosRequestConfig): AxiosRequestConfig {
  const tokenString = storage.getToken();
  if (tokenString) {
    const token: string = JSON.parse(tokenString);
    if (!config) {
      config = {};
    }
    if (!config.headers) {
      config.headers = {};
    }
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
}

function responseInterceptor(response: AxiosResponse) {
  return response.data;
}

axios.interceptors.request.use(requestInterceptor);
axios.interceptors.response.use(responseInterceptor);
