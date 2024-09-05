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
    <div className="btn-wrapper my-3 text-white flex gap-10">
      {/* React Toast Component */}
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
      <button
        className="bg-emerald-500 flex justify-center items-center gap-3 py-3 px-10 rounded text-xl font-medium active:bg-emerald-600"
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
        Add to cart
      </button>
      <div>
        <button
          onClick={() => navigate(`/checkout/${id}`)}
          className="bg-red-500 flex justify-center items-center gap-3  py-3 px-10 rounded text-xl font-medium active:bg-red-600"
        >
          <TbTruckDelivery />
          Buy now
        </button>
      </div>
    </div>
  );
};

export default CartActionBtns;
