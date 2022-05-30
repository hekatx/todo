import { AuthRoutes } from "@/views/auth";
import Home from "@/views/home/components/Home";

const publicRoutes = [
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/auth/*",
    element: <AuthRoutes />,
  },
];

export default publicRoutes;
