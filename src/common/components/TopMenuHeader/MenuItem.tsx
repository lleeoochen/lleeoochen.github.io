import classNames from "classnames";
import { IMenuRoute } from "@/types";

export const MenuItem = ({
  route,
  isPrimary,
  title,
  subtitle,
  blRound = false,
  brRound = false,
}: {
  route?: IMenuRoute;
  isPrimary?: boolean;
  title?: string;
  subtitle?: string;
  blRound?: boolean;
  brRound?: boolean;
}) => {
  return (
    <a
      className={classNames("flex flex-row min-w-24 drop-shadow-lg", {
        invisible: !isPrimary && !route,
        "rounded-bl-3xl": blRound,
        "rounded-br-3xl": brRound,
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
        })}
      >
        {title ?? route?.name}
        {subtitle && (
          <div className="text-base text-menu-subtitle hidden sm:flex">
            {subtitle}
          </div>
        )}
      </div>
    </a>
  );
};
