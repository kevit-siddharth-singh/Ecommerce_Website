import { AuthenticateState } from "../Redux/Slices/authenticateSlice";
import { CartState } from "../Redux/Slices/cartSlice";
import { checkoutType } from "../Redux/Slices/checkoutSlice";

interface OrderSummaryType {
  cartData: CartState;
  checkoutData: checkoutType;
  userData: AuthenticateState;
}

const CheckoutOrderSummary: React.FC<OrderSummaryType> = ({
  cartData,
  checkoutData,
  userData,
}) => {
  return (
    <>
      <div className="w-full lg:w-2/5">
        <p className="text-2xl sm:text-3xl text-white">Order summary</p>
        <div className="flex flex-col gap-4 border rounded p-4">
          <div className="text-white font-semibold">
            {cartData.items.length > 1 ? "Items: " : "Item: "}
            {cartData.items.map((item) => (
              <div key={item.id}>
                <span className="text-xs font-normal">{item.name}</span>
                <br />
              </div>
            ))}
          </div>
          <p className="text-white font-semibold">
            Name:{" "}
            <span className="text-orange-400">
              {checkoutData.name.length > 0 ? checkoutData.name : userData.name}
            </span>
          </p>
          <p className="text-white font-semibold">
            Phone No:{" "}
            <span className="text-orange-400">
              {checkoutData.phn ? checkoutData.phn : userData.phone}
            </span>
          </p>
          <p className="text-white font-semibold">
            Address:{" "}
            <span className="text-orange-400">
              {checkoutData.address ? checkoutData.address : userData.address}
            </span>
          </p>
          <p className="text-white font-semibold">
            Mode of Payment:{" "}
            <span className="text-orange-400">
              {checkoutData.modeofpayment}
            </span>
          </p>
          <p className="text-white font-semibold">
            Tax (GST / SGST): <span className="text-red-500">18%</span>
          </p>
          <p className="text-white font-semibold">
            Total Quantity:{" "}
            <span className="text-orange-400">{cartData.totalQuantity}</span>
          </p>
          <p className="text-white font-semibold">
            Total amount:{" "}
            <span className="text-emerald-500">{cartData.totalAmount}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default CheckoutOrderSummary;
