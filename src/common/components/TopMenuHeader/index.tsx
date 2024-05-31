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
    <div className="flex flex-row gap-12 h-44 font-menu">
      <MenuItem route={leftRoute} brRound />
      <MenuItem title={title} subtitle={subtitle} isPrimary blRound brRound />
      <MenuItem route={rightRoute} blRound />
    </div>
  );
};
