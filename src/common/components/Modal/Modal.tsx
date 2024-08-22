import { Portal } from "./Portal";

type IModal = {
  children: React.ReactNode | React.ReactNode[] | undefined;
  className: string;
};

export const Modal = ({ children, className }: IModal) => {
  return (
    <Portal
      className={
        "fixed top-0 flex size-full bg-bg-page-color transition-[visibility] ease-in-out " +
        className
      }
    >
      <div className="m-auto size-5/6 overflow-auto">{children}</div>
    </Portal>
  );
};
