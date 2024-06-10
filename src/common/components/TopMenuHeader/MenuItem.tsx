import classNames from "classnames";
import { IMenuRoute } from "@/types";

export const MenuItem = ({
  route,
  isPrimary,
  title,
  subtitle,
}: {
  route?: IMenuRoute;
  isPrimary?: boolean;
  title?: string;
  subtitle?: string;
}) => {
  return (
    <a
      className={classNames("flex flex-row drop-shadow-md", {
        invisible: !isPrimary && !route,
        "rounded-bl-3xl": isPrimary,
        "rounded-br-3xl": isPrimary,
        "rounded-full": !isPrimary,
        "mx-5 sm:mx-10": !isPrimary,
        "w-16 h-16 sm:w-20 sm:h-20 m-auto": !isPrimary,
        "hover:drop-shadow-xl": !isPrimary,
        "sm:bg-gradient-to-b from-menu-top to-menu-bottom": isPrimary,
        "bg-gradient-to-b from-menu-top to-menu-bottom": !isPrimary,
        "flex-1": isPrimary,
      })}
      href={route?.href}
    >
      <div
        className={classNames("m-auto text-black text-center", {
          "text-3xl sm:text-5xl": isPrimary,
          "text-[12px] sm:text-[14px]": !isPrimary,
        })}
      >
        {title ?? route?.name}
        {subtitle && (
          <div className="hidden text-base text-menu-subtitle sm:flex">
            {subtitle}
          </div>
        )}
      </div>
    </a>
  );
};
