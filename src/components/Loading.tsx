const Loading = () => {
  return (
    <div className="absolute top-[50%] left-[50%] flex flex-col items-center gap-2">
      <p className="font-medium text-white">Loading..</p>
      <span className=" loading loading-spinner text-accent "></span>
    </div>
  );
};

export default Loading;
