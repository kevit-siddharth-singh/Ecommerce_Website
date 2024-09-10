import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../Redux/store";
import { ProductType } from "../utils/ProductFetch";
import { checkoutActions } from "../Redux/Slices/checkoutSlice";

const OrderSummary: React.FC<{ data: ProductType }> = ({ data }) => {
  const checkoutData = useAppSelector((state) => state.checkout);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (checkoutData) {
      dispatch(checkoutActions.reset());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let content = <p>Loading summary</p>;

  if (data) {
    content = (
      <div className=" sm:px-1 border border-white/60 max-sm:p-1 h-full sm:p-3 rounded">
        <p className="text-white max-sm:hidden sm:text-xl font-semibold sm:mb-2">Order summary</p>
        <div className=" max-sm:text-sm">
          <p>
            Items : <span className="text-white">{data.title}</span>
          </p>
          <p>
            Address :{" "}
            <span className="text-white truncate">{checkoutData.address}</span>
          </p>
          <p>
            Tax : <span className="text-white">18% GST</span>
          </p>
          <p>
            Mode :{" "}
            <span className="text-white">
              {checkoutData.modeofpayment.toUpperCase()}
            </span>
          </p>
        </div>
      </div>
    );
  }

  return content;
};

export default OrderSummary;
