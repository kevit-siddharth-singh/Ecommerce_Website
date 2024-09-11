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
        <ul className="flex flex-col sm:gap-2 sm:p-10 sm:w-4/5 relative">
          <button
            onClick={() => navigate("/product")}
            className="absolute max-sm:right-0 max-sm:top-1 sm:right-9 flex  bg-red-500 active:bg-red-600  max-sm:p-2 sm:p-2   sm:h-12 sm:w-12 text-white justify-center items-center rounded-full"
          >
            <ImCross />
          </button>
          {items.map((item) => (
            <li key={item.id} className="flex flex-col    ">
              <div className="flex  max-sm:p-3 max-sm:gap-2 sm:gap-10">
                <img
                  onClick={() => navigate("/product/" + item.id)}
                  className="max-sm:w-[4rem] max-sm:h-[4.5rem] object-fill   sm:w-[5rem] sm:h-[6rem] cursor-pointer rounded hover:scale-105 transition-all ease-in-out"
                  src={item.image}
                  alt={item.name}
                />

                <div className="item-data flex flex-col sm:gap-2  w-full h-full max-sm:px-2">
                  <p className="font-semibold text-white max-sm:text-sm">
                    {item.name}
                  </p>
                  <div className="btn-grp">
                    <div className="flex items-center sm:gap-3 max-sm:gap-2">
                      <button
                        onClick={() =>
                          dispatch(cartActions.removeItemFromCart(item.id))
                        }
                        className="flex justify-center  max-sm:p-1  bg-red-500  sm:w-[3rem] text-white sm:p-2 rounded"
                      >
                        <FaMinus />
                      </button>
                      <button className=" flex justify-center max-sm:p-1 max-sm:text-xs max-sm:font-semibold  text-white sm:text-xl font-medium border sm:w-[2rem] rounded">
                        {item.quantity}
                      </button>
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
                        className="flex justify-center  bg-emerald-400 max-sm:p-1 sm:w-[3rem]  text-white sm:p-2 rounded "
                      >
                        <FaPlus />
                      </button>
                    </div>
                    <button
                      onClick={() => navigate("/checkout/" + item.id)}
                      className="max-sm:my-1 max-sm:text-sm max-sm:px-3  sm:my-2 bg-blue-500 font-semibold text-white  sm:p-1 sm:w-[9.5rem] rounded active:bg-blue-600"
                    >
                      Buy
                    </button>
                  </div>
                  <p className="text-right text-yellow-300">
                    ₹ {item.price}{" "}
                    <span className="text-red-500 font-semibold">X</span>{" "}
                    {item.quantity}
                  </p>
                </div>
              </div>
              <div className="divider"></div>
            </li>
          ))}
          <div className="flex justify-between max-sm:p-2">
            <button
              onClick={() => dispatch(cartActions.clearCart())}
              className="max-sm:hidden border border-red-600 rounded   sm:p-3 text-red-500   hover:bg-red-500 hover:text-white  "
            >
              Empty Cart
            </button>

            <div className="text-center">
              <p className="text-white font-semibold">Total Quantity</p>
              <p className="text-emerald-500 font-semibold max-sm:text-start">
                {totalQuantity} {totalQuantity !== 1 ? "Items" : "Item"}
              </p>
            </div>
            <div className="text-right">
              <p className="text-white font-semibold">Total Amount</p>
              <p className="text-emerald-500 text-center font-semibold">
                ₹ {totalAmount.toFixed(2)}
              </p>
            </div>
            <button
              onClick={() => navigate("/checkout/all")}
              className="max-sm:hidden border border-yellow-600 rounded   sm:p-3 sm:px-4 text-yellow-500   hover:bg-yellow-500 hover:text-white  "
            >
              Buy all
            </button>
          </div>
          <button
            onClick={() => dispatch(cartActions.clearCart())}
            className="border  mx-4 py-1 text-md font-semibold sm:hidden border-red-600 rounded text-red-500   hover:bg-red-500 hover:text-white  "
          >
            Empty Cart
          </button>
        </ul>
      ) : (
        <EmptyCartCard />
      )}
    </div>
  );
};

export default CartItems;
