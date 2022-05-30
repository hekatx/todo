import Axios, { AxiosRequestConfig, AxiosResponse } from "axios";
// import { API_URL } from "@/config";

const API_URL = "http://localhost:5432";

function getAccessToken(): string {
  return localStorage.getItem("accessToken") || "";
}

export const axios = Axios.create({
  baseURL: API_URL,
});

function requestInterceptor(config: AxiosRequestConfig): AxiosRequestConfig {
  const token: string = getAccessToken();
  if (!config) {
    config = {};
  }
  if (!config.headers) {
    config.headers = {};
  }
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}

function responseInterceptor(response: AxiosResponse) {
  return response.data;
}

axios.interceptors.request.use(requestInterceptor);
axios.interceptors.response.use(responseInterceptor);
