import { IMenuRoute } from "@/types";
import { MenuItem } from "./MenuItem";
import { RouteName, RouteDefinitions } from "@/main";

type ITopMenuHeader = {
  title: string;
  subtitle?: string;
  currentRoute: RouteName;
  // For backward compatibility, can be removed later
  leftRoute?: IMenuRoute;
  rightRoute?: IMenuRoute;
};

export const TopMenuHeader = ({
  title,
  subtitle,
  currentRoute,
  leftRoute: propLeftRoute,
  rightRoute: propRightRoute,
}: ITopMenuHeader) => {
  // Derive routes from currentRoute if provided, otherwise use props
  const leftRoute = currentRoute ? RouteDefinitions[currentRoute].leftRoute : propLeftRoute;
  const rightRoute = currentRoute ? RouteDefinitions[currentRoute].rightRoute : propRightRoute;
  return (
    <div className="flex h-24 flex-row font-menu sm:h-44">
      <MenuItem route={leftRoute} />
      <MenuItem title={title} subtitle={subtitle} isPrimary />
      <MenuItem route={rightRoute} />
    </div>
  );
};
