import { axios } from "@/lib/axios";
import { LoginResponse } from "@/types";

interface LoginCredentials {
  email: string;
  password: string;
}

export function login(credentials: LoginCredentials): Promise<LoginResponse> {
  return axios.post("/login", credentials);
}
