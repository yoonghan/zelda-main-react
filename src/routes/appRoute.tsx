import About from "./About";
import Root from "./Root";
import ErrorPage from "./ExtendedErrorPage";
import { RouteObject } from "react-router-dom";

const routes: RouteObject[] = [
  { path: "/", element: <About />, errorElement: <ErrorPage /> },
  {
    path: "/auth",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <About />,
      },
    ],
  },
];

export default routes;
