import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { Home } from "@/pages/Home";
import ResumeIconSvg from "@/common/assets/images/icons/resume_icon.svg";
import HobbyIconSvg from "@/common/assets/images/icons/hobby_icon.svg";
import HomeIconSvg from "@/common/assets/images/icons/home_icon.svg";
import { IMenuRoute } from "./types";
import { Resume } from "./pages/Resume";
import { Hobbies } from "./pages/Hobbies";
import "@/common/styles/main.css";

export enum RouteName {
  HOME = "HOME",
  HOBBIES = "HOBBIES",
  RESUME = "RESUME",
}

export const RouteDefinitions: Record<RouteName, IMenuRoute> = {
  [RouteName.HOME]: {
    name: RouteName.HOME,
    href: "#/",
    icon: <HomeIconSvg />,
  },
  [RouteName.HOBBIES]: {
    name: RouteName.HOBBIES,
    href: "#/hobbies",
    icon: <HobbyIconSvg />,
  },
  [RouteName.RESUME]: {
    name: RouteName.RESUME,
    href: "#/resume",
    icon: <ResumeIconSvg />,
  },
};

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
