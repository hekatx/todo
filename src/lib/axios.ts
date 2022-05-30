import Axios, { AxiosRequestConfig } from "axios";
import { API_URL } from "@/config";

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

// Could add an reponse interceptor but thats up to the team
// function responseInterceptor(response) {}

axios.interceptors.request.use(requestInterceptor);
