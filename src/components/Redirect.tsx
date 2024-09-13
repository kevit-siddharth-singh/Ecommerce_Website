import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Confetti from "react-confetti";
import { useWindowSize } from "@react-hook/window-size";

const Redirect: React.FC = () => {
  const winRes = useWindowSize();
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/product");
    }, 3000);

    return () => clearTimeout(timer);
  });
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Confetti width={winRes[0]} height={winRes[1]} />
      <p className="text-4xl font-semibold text-white">
        Order placed successfully !
      </p>
      <div className="flex flex-col items-center justify-center">
        <p className="text-xl mt-2">Redirecting to products page....</p>
        <span className="loading loading-spinner text-secondary"></span>
      </div>
    </div>
  );
};

export default Redirect;
