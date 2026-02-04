import { RouteName, RouteDefinitions } from "@/main";

// Define the navigation structure for each page
export const PageRoutes = {
  [RouteName.HOME]: {
    leftRoute: RouteDefinitions[RouteName.HOBBIES],
    rightRoute: RouteDefinitions[RouteName.RESUME],
  },
  [RouteName.HOBBIES]: {
    leftRoute: RouteDefinitions[RouteName.RESUME],
    rightRoute: RouteDefinitions[RouteName.HOME],
  },
  [RouteName.RESUME]: {
    leftRoute: RouteDefinitions[RouteName.HOME],
    rightRoute: RouteDefinitions[RouteName.HOBBIES],
  },
};
