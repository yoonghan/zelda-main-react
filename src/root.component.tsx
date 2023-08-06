import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import appRoutes from "./routes/appRoute";

const router = createBrowserRouter(appRoutes);

export default function Root(props) {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
