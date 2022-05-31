import { ComponentType, FC } from "react";
// import { useNavigate, Route, Navigate } from "react-router-dom";
import useAuth from "@/hooks/useAuth";

const withAuth = (Component: ComponentType): FC => {
  const Authenticated: FC = (): JSX.Element | null => {
    // const navigate = useNavigate();
    const isAuthenticated = useAuth();

    if (isAuthenticated) {
      return <Component />;
    }

    return null;
  };

  return Authenticated;
};
export default withAuth;
