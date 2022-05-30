import { ComponentType, FC, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { axios } from "@/lib/axios";
import { storage } from "@/utils";
import jwt_decode from "jwt-decode";

interface User {
  email: string;
  name: string;
  password: string;
  id: number;
}

interface Token {
  email: string;
  iat: number;
  exp: number;
  sub: string;
}

function getCurrentUser(id: string): Promise<User> {
  return axios.get(`/users/${id}`);
}

const withAuth = (Component: ComponentType): FC => {
  const Authenticated: FC = (): JSX.Element | null => {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const token = storage.getToken();

    async function authenticateUser(id: string): Promise<void> {
      try {
        await getCurrentUser(id);
        setIsAuthenticated(true);
      } catch (err) {
        navigate("/auth/login");
        console.log(err);
      }
    }

    useEffect(() => {
      if (token) {
        const { sub }: Token = jwt_decode(token);
        authenticateUser(sub);
      } else {
        navigate("/auth/login");
      }
    }, []);

    return isAuthenticated ? <Component /> : null;
  };

  return Authenticated;
};
export default withAuth;
