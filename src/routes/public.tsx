import { AuthRoutes } from "@/views/auth";
import Landing from "@/views/landing";

const publicRoutes = [
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/auth/*",
    element: <AuthRoutes />,
  },
];

export default publicRoutes;
