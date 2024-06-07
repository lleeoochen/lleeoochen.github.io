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
    <div className="flex flex-row gap-2 sm:gap-12 h-32 font-menu sm:h-44">
      <MenuItem route={leftRoute} brRound />
      <MenuItem title={title} subtitle={subtitle} isPrimary blRound brRound />
      <MenuItem route={rightRoute} blRound />
    </div>
  );
};
