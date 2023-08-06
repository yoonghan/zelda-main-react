import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import appRoutes from "./routes/appRoute";
import {
  consoleReportHandler,
  reportWebVitals,
} from "@yoonghan/walcron-microfrontend-shared";

const router = createBrowserRouter(appRoutes);

export default function Root(props) {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

reportWebVitals(consoleReportHandler);
