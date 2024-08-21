import { IMenuRoute } from "@/types";
import { MenuItem } from "./MenuItem";

type ITopMenuHeader = {
  title: string;
  subtitle?: string;
  leftRoute?: IMenuRoute;
  rightRoute?: IMenuRoute;
};

export const TopMenuHeader = ({
  title,
  subtitle,
  leftRoute,
  rightRoute,
}: ITopMenuHeader) => {
  return (
    <div className="flex h-24 flex-row font-menu sm:h-44">
      <MenuItem route={leftRoute} />
      <MenuItem title={title} subtitle={subtitle} isPrimary />
      <MenuItem route={rightRoute} />
    </div>
  );
};
