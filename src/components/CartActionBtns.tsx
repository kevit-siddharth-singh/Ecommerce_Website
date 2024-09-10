import { LuShoppingCart } from "react-icons/lu";
import { useAppDispatch } from "../Redux/store";
import { cartActions } from "../Redux/Slices/cartSlice";
import { TbTruckDelivery } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

// React Toast import
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "../utils/ToastNotify";

const CartActionBtns: React.FC<{
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}> = ({ id, name, price, quantity, image }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <div className="btn-wrapper w-full   lg:my-3 text-white flex   max-md:justify-between md:gap-10 ">
      {/* React Toast Component */}
      <div className="absolute">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
      <button
        title="Add to cart"
        className="bg-emerald-500 flex justify-center items-center max-md:px-4 max-md:gap-2 max-md:py-2 md:p-3  lg:gap-3 lg:py-3 lg:px-10 rounded lg:text-xl font-medium active:bg-emerald-600"
        onClick={() => {
          notify();
          dispatch(
            cartActions.addItemToCart({
              id,
              name,
              price,
              quantity,
              image,
            })
          );
        }}
      >
        <LuShoppingCart />
        <p className="max-md:text-sm">Add to cart</p>
      </button>
      <div>
        <button
          title="Buy now"
          onClick={() => navigate(`/checkout/${id}`)}
          className="bg-red-500 flex justify-center items-center max-md:px-4 max-md:gap-2 max-md:py-2 md:p-3  lg:gap-3  lg:py-3 lg:px-10 rounded lg:text-xl font-medium active:bg-red-600"
        >
          <TbTruckDelivery />
          <p className="max-md:text-sm">Buy now</p>
        </button>
      </div>
    </div>
  );
};

export default CartActionBtns;
