const Loading = () => {
  return (
    <div className="fixed w-screen h-screen flex flex-col justify-center items-center gap-3">
      <span className=" loading loading-spinner loading-lg text-accent "></span>
    </div>
  );
};

export default Loading;
