// React - Icons Import
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { CartItem } from "../Redux/Slices/cartSlice";

const CartItems: React.FC<{
  items: CartItem[];
  totalAmount: number;
  totalQuantity: number;
}> = ({ items, totalAmount, totalQuantity }) => {
  return (
    <div className="flex  justify-center">
      <ul className="flex flex-col gap-2 p-10 w-4/5">
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
                  <button className="flex justify-center  bg-red-500  w-[3rem] text-white p-2 rounded">
                    <FaMinus />
                  </button>
                  <p className=" flex justify-center text-white text-xl font-medium border w-[2rem] rounded">
                    {item.quantity}
                  </p>
                  <button className="flex justify-center  bg-emerald-400 w-[3rem]  text-white p-2 rounded ">
                    <FaPlus />
                  </button>
                </div>
                <p className="text-right">₹{item.price}</p>
              </div>
            </div>
            <div className="divider"></div>
          </li>
        ))}
        <div className="flex justify-between">
          <button className="border border-red-600 rounded p-3 text-red-500 ">
            Empty Cart
          </button>

          <div className="text-right">
            <p className="text-white font-semibold">Total Amount</p>
            <p className="text-emerald-500 font-semibold">₹ {totalAmount}</p>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default CartItems;
