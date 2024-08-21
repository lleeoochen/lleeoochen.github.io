export const TimelineBackground = () => {
  return (
    <div className="absolute -z-10 flex size-full flex-col items-center">
      <div className="size-4 rounded-full bg-job-selected-bar"></div>
      <div className="absolute top-3 h-full w-1 rounded-lg bg-job-selected-bar"></div>
    </div>
  );
};
