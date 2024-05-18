import { TopMenuHeader } from "@/components/TopMenuHeader";
import { BasicLayout } from "@/layouts/BasicLayout";
import { menuRoutes } from "@/main";
import { useSwipeable } from "react-swipeable";
import "./index.scss";

export const Hobbies = () => {
  const handlers = useSwipeable({ onSwipedLeft: () => {
    window.location.href = "/";
  } });

  return (
    <div {...handlers}>
      <BasicLayout topMenuHeader={<TopMenuHeader title="HOBBIES" rightRoute={menuRoutes[1]}/>}>
        <></>
      </BasicLayout>
    </div>
  );
};
