import Home from "@/views/home/components/Home";

const protectedRoutes = [
  {
    path: "/",
    element: <Home />,
  },
];

export default protectedRoutes;
