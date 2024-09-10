import { useNavigate } from "react-router-dom";

const EmptyCartCard = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center sm:gap-2 max-sm:h-screen ">
      <img className="max-sm:w-2/3" src="/public/empty-cart.png" alt="" />
      <h1 className="max-sm:text-3xl sm:text-6xl text-orange-500 font-semibold">
        Your cart is empty!
      </h1>
      <button
        onClick={() => navigate("/product")}
        className="m-4 bg-orange-500 max-sm:p-2 max-sm:text-xl sm:p-4 rounded sm:text-3xl text-white active:bg-orange-600"
      >
        Go back
      </button>
    </div>
  );
};

export default EmptyCartCard;
