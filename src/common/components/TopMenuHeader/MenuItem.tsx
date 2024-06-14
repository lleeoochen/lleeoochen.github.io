import clsx from "clsx";
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
      className={clsx("flex flex-row", {
        invisible: !isPrimary && !route,
        "m-auto mx-5 size-16 rounded-3xl bg-gradient-to-b from-menu-top to-menu-bottom shadow-md hover:shadow-xl sm:mx-10 sm:size-20":
          !isPrimary,
        "flex-1 rounded-bl-3xl rounded-br-3xl from-menu-top to-menu-bottom sm:bg-gradient-to-b sm:shadow-md":
          isPrimary,
      })}
      href={route?.href}
    >
      <div
        className={clsx("text-black m-auto text-center", {
          "text-2xl sm:text-5xl": isPrimary,
          "text-[12px] sm:text-[14px]": !isPrimary,
        })}
      >
        {title ?? route?.name}
        {subtitle && (
          <div className="hidden text-base text-menu-subtitle lg:flex">
            {subtitle}
          </div>
        )}
      </div>
    </a>
  );
};
