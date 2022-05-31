import { axios } from "@/lib/axios";
import { UserContext } from "@/providers/user";
import { storage } from "@/utils";
import jwt_decode from "jwt-decode";
import { useContext, useEffect, useState } from "react";

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

function useAuth(): boolean {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { setUser } = useContext(UserContext);
  const token = storage.getToken();

  async function authenticateUser(id: string): Promise<void> {
    try {
      const user: User = await getCurrentUser(id);
      setIsAuthenticated(true);
      setUser(user.name);
    } catch (err) {
      setIsAuthenticated(false);
    }
  }

  useEffect(() => {
    if (token) {
      const { sub }: Token = jwt_decode(token);
      authenticateUser(sub);
    }
  }, []);

  console.log("whatishappeninglol", isAuthenticated);

  return isAuthenticated;
}

export default useAuth;
