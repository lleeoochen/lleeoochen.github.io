import { BaseLayout,
   Props as BaseLayoutProps } from "../BaseLayout";
import "./index.scss";

type Props = Omit<BaseLayoutProps, "includeMenu">;

export const ReadingLayout = ({ title }: Props) => {
  return (
    <BaseLayout title={title} includeMenu>
      <div className="container-main-outer">
        <div className="container-main">
          <slot />
        </div>
      </div>
      </BaseLayout>
  );
};
