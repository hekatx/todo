import { AuthRoutes } from "@/views/auth";
import { Navigate } from "react-router-dom";

const publicRoutes = [
  {
    path: "/auth/*",
    element: <AuthRoutes />,
  },
];

export default publicRoutes;
