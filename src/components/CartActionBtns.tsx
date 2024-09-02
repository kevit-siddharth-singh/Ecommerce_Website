import { FaRegHeart } from "react-icons/fa6";
import { LuShoppingCart } from "react-icons/lu";

const CartActionBtns = () => {
  return (
    <div className="btn-wrapper my-3 text-white flex gap-10">
      <button className="bg-emerald-500 flex justify-center items-center gap-3 py-3 px-10 rounded text-xl font-medium active:bg-emerald-600">
        <LuShoppingCart />
        Add to cart
      </button>
      <div>
        <button className="bg-red-500 flex justify-center items-center gap-3  py-3 px-10 rounded text-xl font-medium active:bg-red-600">
          <FaRegHeart />
          Add to wishlist
        </button>
      </div>
    </div>
  );
};

export default CartActionBtns;
