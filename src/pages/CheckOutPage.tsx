import { useQuery } from "@tanstack/react-query";
import AddressForm from "../components/AddressForm";
import CheckoutItemDetails from "../components/CheckoutItemDetails";
import OrderSummary from "../components/OrderSummary";
import { useAppSelector } from "../Redux/store";
import { getProductDetail } from "../utils/getProductDetail";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";

const CheckOutPage = () => {
  const checkoutData = useAppSelector((state) => state.checkout);
  console.log(checkoutData);

  const { Pid } = useParams();
  console.log(Pid);

  const { data } = useQuery({
    queryKey: ["Checkout", { productId: Pid }],
    queryFn: () => getProductDetail(Pid!),
  });

  let content = <Loading />;

  if (data) {
    content = (
      <div className="flex flex-col items-center  px-4 py-1 ">
        <h1 className="text-orange-500 text-5xl font-semibold mt-[2rem] mb-[3rem]">
          Checkout Page
        </h1>

        <div className="reviewProduct   flex flex-col   justify-between   ">
          <p className="text-white text-3xl mb-2 ">Review your order</p>

          <div className="container  flex gap-5">
            <div className="demographic-info flex flex-col gap-3 ">
              <AddressForm />
              <CheckoutItemDetails data={data} />
            </div>
            <div className="ProductDetail border border-white/60 p-3 rounded ">
              <OrderSummary data={data} />
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <button className="bg-orange-500 text-white font-semibold p-3  rounded active:bg-orange-600">
              Order now
            </button>
          </div>
        </div>
      </div>
    );
  }

  return content;
};

export default CheckOutPage;
