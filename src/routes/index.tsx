import { useRoutes } from "react-router-dom";
import publicRoutes from "./public";

export default function AppRoutes(): JSX.Element {
  const element = useRoutes([...publicRoutes]);

  return <>{element}</>;
}
