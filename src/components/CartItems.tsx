// React - Icons Import
import { ImCross } from "react-icons/im";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { cartActions, CartItem } from "../Redux/Slices/cartSlice";
import EmptyCartCard from "./EmptyCartCard";
import { useAppDispatch } from "../Redux/store";
import { useNavigate } from "react-router-dom";

const CartItems: React.FC<{
  items: CartItem[];
  totalAmount: number;
  totalQuantity: number;
}> = ({ items, totalAmount, totalQuantity }) => {
  // Redux App Dispatch
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  return (
    <div className="flex justify-center ">
      {items.length !== 0 ? (
        <ul className="flex flex-col gap-2 p-10 w-4/5 relative">
          <button
            onClick={() => navigate("/product")}
            className="absolute right-9 flex  bg-red-500 active:bg-red-600 p-2 h-12 w-12 text-white justify-center items-center rounded-full"
          >
            <ImCross />
          </button>
          {items.map((item) => (
            <li key={item.id} className="flex flex-col    ">
              <div className="flex gap-10">
                <img
                  className="w-[5rem] h-[6rem] rounded"
                  src={item.image}
                  alt={item.name}
                />

                <div className="item-data flex flex-col gap-4  w-full">
                  <p className="font-semibold text-white">{item.name}</p>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() =>
                        dispatch(cartActions.removeItemFromCart(item.id))
                      }
                      className="flex justify-center  bg-red-500  w-[3rem] text-white p-2 rounded"
                    >
                      <FaMinus />
                    </button>
                    <p className=" flex justify-center text-white text-xl font-medium border w-[2rem] rounded">
                      {item.quantity}
                    </p>
                    <button
                      onClick={() =>
                        dispatch(
                          cartActions.addItemToCart({
                            id: item.id,
                            image: item.image,
                            name: item.name,
                            price: item.price,
                            quantity: item.quantity,
                          })
                        )
                      }
                      className="flex justify-center  bg-emerald-400 w-[3rem]  text-white p-2 rounded "
                    >
                      <FaPlus />
                    </button>
                  </div>
                  <p className="text-right text-yellow-300">₹{item.price}</p>
                </div>
              </div>
              <div className="divider"></div>
            </li>
          ))}
          <div className="flex justify-between">
            <button
              onClick={() => dispatch(cartActions.clearCart())}
              className="border border-red-600 rounded p-3 text-red-500   hover:bg-red-500 hover:text-white  "
            >
              Empty Cart
            </button>

            <div className="text-center">
              <p className="text-white font-semibold">Total Quantity</p>
              <p className="text-emerald-500 font-semibold">
                {totalQuantity} {totalQuantity !== 1 ? "Items" : "Item"}
              </p>
            </div>
            <div className="text-right">
              <p className="text-white font-semibold">Total Amount</p>
              <p className="text-emerald-500 font-semibold">
                ₹ {totalAmount.toFixed(2)}
              </p>
            </div>
          </div>
        </ul>
      ) : (
        <EmptyCartCard />
      )}
    </div>
  );
};

export default CartItems;
