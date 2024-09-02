import { FaRegHeart } from "react-icons/fa6";
import { LuShoppingCart } from "react-icons/lu";
import { useAppDispatch } from "../Redux/store";
import { cartActions } from "../Redux/Slices/cartSlice";

const CartActionBtns: React.FC<{
  id: number;
  name: string;
  price: number;
  quantity: number;
}> = ({ id, name, price, quantity }) => {
  const dispatch = useAppDispatch();

  // console.log(id, name, price, quantity);

  return (
    <div className="btn-wrapper my-3 text-white flex gap-10">
      <button
        className="bg-emerald-500 flex justify-center items-center gap-3 py-3 px-10 rounded text-xl font-medium active:bg-emerald-600"
        onClick={() =>
          dispatch(
            cartActions.addItemToCart({
              id,
              name,
              price,
              quantity,
            })
          )
        }
      >
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
