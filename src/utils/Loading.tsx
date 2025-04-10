const Loading = ({ loadingName }: { loadingName: string }) => {
  return (
    <span className={`loading loading-spinner text-${loadingName}`}></span>
  );
};

export default Loading;
