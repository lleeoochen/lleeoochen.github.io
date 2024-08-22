type ITextContentPanel = {
  children: React.ReactNode | React.ReactNode[] | JSX.Element | undefined;
  className: string | undefined;
};

export const TextContentPanel = ({
  children,
  className,
}: ITextContentPanel) => {
  return (
    <div
      className={
        "text-pretty rounded-2xl bg-bg-content-color p-8 shadow-md " + className
      }
    >
      {children}
    </div>
  );
};
