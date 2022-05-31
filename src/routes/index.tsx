import useAuth from "@/hooks/useAuth";
import { useRoutes } from "react-router-dom";
import protectedRoutes from "./protected";
import publicRoutes from "./public";

export default function AppRoutes(): JSX.Element {
  const routes = [...protectedRoutes, ...publicRoutes];

  const element = useRoutes([...routes]);

  return <>{element}</>;
}
