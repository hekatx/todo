import { axios } from "@/lib/axios";
import { UserContext } from "@/providers/user";
import { Token, User } from "@/types";
import { storage } from "@/utils";
import jwt_decode from "jwt-decode";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function getCurrentUser(id: string): Promise<User> {
  return axios.get(`/users/${id}`);
}

function useAuth(): boolean {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { setUser } = useContext(UserContext);
  const token = storage.getToken();

  async function authenticateUser(id: string): Promise<void> {
    try {
      const user: User = await getCurrentUser(id);
      setIsAuthenticated(true);
      setUser(user);
    } catch (err) {
      navigate("/auth/login");
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
