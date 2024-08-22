import clsx from "clsx";
import { IMenuRoute } from "@/types";
import { outlineNormalClsx } from "@/common/utils/commonStylings";

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
        <div className="text-black m-auto p-5 text-center text-3xl sm:text-2xl lg:text-5xl">
          <div>{title ?? route?.name}</div>
          <div>{route?.icon}</div>
          {subtitle && (
            <div className="hidden text-base text-menu-subtitle sm:flex">
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
        "bg-bg-content-color m-auto mx-5 flex size-12 flex-row rounded-full shadow-md hover:shadow-xl sm:mx-10 sm:size-20",
        outlineNormalClsx,
        {
          invisible: !route,
        },
      )}
      href={route?.href}
    >
      <div className={"m-auto"}>
        <div className="m-auto flex size-8">{route?.icon}</div>
        <div className="hidden text-center text-[12px] font-bold text-accent-color sm:text-[0.7rem] lg:block">
          {title ?? route?.name}
        </div>
      </div>
    </a>
  );
};
