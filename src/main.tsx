import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { Home } from "@/pages/Home";
import { IMenuRoute } from "./types";
import { Resume } from "./pages/Resume";
import { Hobbies } from "./pages/Hobbies";
import "@/common/styles/main.css";

export const menuRoutes: IMenuRoute[] = [
  {
    href: "#/hobbies",
    name: "HOBBIES",
  },
  {
    href: "#/",
    name: "HOME",
  },
  {
    href: "#/resume",
    name: "RESUME",
  },
];

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/hobbies",
    element: <Hobbies />,
  },
  {
    path: "/resume",
    element: <Resume />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
