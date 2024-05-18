import React from "react";
import ReactDOM from "react-dom/client";
import {
  createHashRouter, RouterProvider
} from "react-router-dom";
import { Home } from "@/pages/Home";

import "@/common/styles/typography.scss";
import { Hobbies } from "./pages/Hobbies";
import { Resume } from "./pages/Resume";
import { IMenuRoute } from "./types";

export const menuRoutes: IMenuRoute[] = [
  {
    href: "#/hobbies",
    name: "HOBBIES"
  },
  {
    href: "#/",
    name: "HOME"
  },
  {
    href: "#/resume",
    name: "RESUME"
  }
];

const router = createHashRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/hobbies",
    element: <Hobbies />
  },
  {
    path: "/resume",
    element: <Resume />
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
