type IResumeDescriptions = {
  descriptions: string[] | undefined;
};

export const ResumeDescriptions = ({ descriptions }: IResumeDescriptions) => {
  return (
    <>
      {descriptions?.map((description, index) => (
        <div key={index} className="mt-2 flex gap-2">
          <div className="select-none">❖</div>
          <div>{description}</div>
        </div>
      ))}
    </>
  );
};
