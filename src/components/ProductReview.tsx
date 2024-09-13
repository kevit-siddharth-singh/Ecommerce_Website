import { FaMinus, FaPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../Redux/store";
import { cartActions, CartState } from "../Redux/Slices/cartSlice";

const ProductReview: React.FC<{
  cartData: CartState;
}> = ({ cartData }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <>
      <div>
        <p className="text-2xl sm:text-3xl text-white">Products Selected</p>
        <div className="max-h-64 border rounded p-2 flex flex-col gap-5 overflow-hidden overflow-y-auto">
          {cartData.items.map((item) => (
            <div key={item.id} className="flex gap-3">
              <div
                onClick={() => navigate("/product/" + item.id)}
                className="w-20 h-20 cursor-pointer bg-white rounded overflow-hidden"
              >
                <img
                  className="object-cover w-full h-full"
                  src={item.image}
                  alt={item.name}
                  title={item.name}
                />
              </div>
              <div className="text-sm flex flex-col gap-1">
                <p className="font-medium text-white">
                  Name: <span className="text-orange-400">{item.name}</span>
                </p>
                <p className="font-medium text-white">
                  Price: ₹<span className="text-emerald-500">{item.price}</span>
                </p>
                <p className="font-medium text-white">
                  Quantity:{" "}
                  <span className="text-emerald-500">{item.quantity}</span>
                </p>
                <p className="font-medium text-white">
                  Total price: ₹
                  <span className="text-emerald-500">
                    {item.quantity * item.price}
                  </span>
                </p>
                {/* Product Quantity Buttons */}
                <div className="flex gap-3 justify-start items-center text-white font-medium">
                  <button
                    onClick={() =>
                      dispatch(cartActions.removeItemFromCart(item.id))
                    }
                    className="bg-red-500 p-1 px-3 rounded"
                  >
                    <FaMinus />
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
                    className="bg-blue-500 p-1 px-3 rounded"
                  >
                    <FaPlus />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductReview;
