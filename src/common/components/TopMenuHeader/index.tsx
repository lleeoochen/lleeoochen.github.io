import { IMenuRoute } from "@/types";
import "./index.scss";

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
  rightRoute
}: ITopMenuHeader) => {
  return (
    <div className="top-menu-header">
      <a className={"menu-item left-item " + (leftRoute ? "" : "invisible")} href={leftRoute?.href}>
        <div className="title">{leftRoute?.name}</div>
      </a>
      <div className="menu-item main-item">
        <div className="title">{title}
          <div className="subtitle">{subtitle}</div>
        </div>
      </div>
      <a className={"menu-item right-item " + (rightRoute ? "" : "invisible")} href={rightRoute?.href}>
        <div className="title">{rightRoute?.name}</div>
      </a>
    </div>
  );
};
