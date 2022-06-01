import { ComponentType, FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "@/hooks/useAuth";

const withAuth = (Component: ComponentType): FC => {
  const Authenticated: FC = (): JSX.Element | null => {
    const navigate = useNavigate();
    const isAuthenticated = useAuth();

    useEffect(() => {
      if (!isAuthenticated) {
        navigate("/auth/login");
      }
    }, []);
    if (isAuthenticated) {
      return <Component />;
    }

    return null;
  };

  return Authenticated;
};
export default withAuth;
