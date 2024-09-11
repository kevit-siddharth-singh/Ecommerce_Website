import { useNavigate } from "react-router-dom";

const EmptyOrderPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center gap-4 h-screen p-3">
      <div className="  max-sm:w-[10rem] sm:w-[15rem] mb-4">
        <img
          className="cursor-pointer ease-in-out duration-500  
          drop-shadow-drop-doggy
          hover:drop-shadow-drop-doggy-hover"
          src="/EmptyOrderPage.png"
          alt="Cute Doggy"
        />
      </div>
      <p className="text-white max-sm:text-3xl sm:text-5xl tracking-widest font-medium">
        No orders yet
      </p>
      <p className="font-semibold text-center">
        Looks like you haven't made your choice yet !
      </p>
      <button
        onClick={() => navigate("/product")}
        className="max-sm:p-1 max-sm:text-md  tracking-wider text-white text-xl font-semibold active:bg-orange-600 bg-orange-500 p-3 rounded"
      >
        GO HOME
      </button>
    </div>
  );
};

export default EmptyOrderPage;
