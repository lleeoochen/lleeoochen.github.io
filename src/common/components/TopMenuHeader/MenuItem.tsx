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
  if (isPrimary) {
    return (
      <a
        className="flex flex-1 flex-row rounded-b-3xl from-menu-top to-menu-bottom sm:bg-gradient-to-b sm:shadow-md"
        href={route?.href}
      >
        <div className="text-black m-auto text-center text-2xl sm:text-5xl">
          <div>{title ?? route?.name}</div>
          <div>{route?.icon}</div>
          {subtitle && (
            <div className="hidden text-base text-menu-subtitle lg:flex">
              {subtitle}
            </div>
          )}
        </div>
      </a>
    );
  }

  return (
    <a
      className={clsx(
        "m-auto mx-5 flex size-16 flex-row rounded-full bg-gradient-to-b from-menu-top to-menu-bottom shadow-md hover:shadow-xl sm:mx-10 sm:size-20",
        {
          invisible: !route,
        },
      )}
      href={route?.href}
    >
      <div
        className={"text-black m-auto text-center text-[12px] sm:text-[14px]"}
      >
        <div className="hidden sm:block">{title ?? route?.name}</div>
        <div className="flex size-10 sm:hidden">{route?.icon}</div>
        {subtitle && (
          <div className="hidden text-base text-menu-subtitle lg:flex">
            {subtitle}
          </div>
        )}
      </div>
    </a>
  );
};
