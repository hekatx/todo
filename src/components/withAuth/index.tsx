import { ComponentType, FC, useEffect } from "react";
import useAuth from "@/hooks/useAuth";

const withAuth = (Component: ComponentType): FC => {
  const Authenticated: FC = (): JSX.Element | null => {
    const isAuthenticated = useAuth();

    if (isAuthenticated) {
      return <Component />;
    }

    return null;
  };

  return Authenticated;
};
export default withAuth;
