import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Loading = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Set a timer for 5 seconds to navigate to the "/error" route
    const timer = setTimeout(() => {
      navigate("/error");
    }, 3000);

    // Clean up the timer if the component is unmounted before 5 seconds
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="fixed w-screen h-screen flex flex-col justify-center items-center gap-3">
      <span className=" loading loading-spinner loading-lg text-accent "></span>
    </div>
  );
};

export default Loading;
