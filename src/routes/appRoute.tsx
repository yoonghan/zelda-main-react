import About from "./About";
import Root from "./Root";
import ErrorPage from "./ExtendedErrorPage";
import { RouteObject } from "react-router-dom";
import Main from "./Main";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Main />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
];

export default routes;
