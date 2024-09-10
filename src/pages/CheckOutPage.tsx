import { useQuery } from "@tanstack/react-query";
import AddressForm from "../components/AddressForm";
import CheckoutItemDetails from "../components/CheckoutItemDetails";
import OrderSummary from "../components/OrderSummary";
import { useAppDispatch, useAppSelector } from "../Redux/store";
import { getProductDetail } from "../utils/getProductDetail";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import useAuthCheckerHook from "../custom hooks/useAuthCheckerHook";
import { orderedProductsActions } from "../Redux/Slices/orderedProducts";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { FailedNotify, SuccessFullNotify } from "../utils/ToastNotify";
import useTitleChangeHook from "../custom hooks/useTitleChangeHook";

const CheckOutPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const checkoutData = useAppSelector((state) => state.checkout);

  // Local State
  const [localProductQuantity, setLocalProductQuantity] = useState(1);
  const [issuccessfullorder, setIsSuccessfullorder] = useState(false);

  function AddProducts() {
    if (localProductQuantity < 10) {
      setLocalProductQuantity((state) => (state += 1));
    }
  }

  function RemoveProducts() {
    if (localProductQuantity > 1) {
      setLocalProductQuantity((state) => (state -= 1));
    }
  }

  // Custom hook for Auth Check
  useAuthCheckerHook();
  // Custom hook for Title Change
  useTitleChangeHook({ title: "checkout page" });

  const { Pid } = useParams();

  const { data } = useQuery({
    queryKey: ["Checkout", { productId: Pid }],
    queryFn: () => getProductDetail(Pid!),
  });

  // Handler to add product to order

  const handleAddProduct = () => {
    if (
      checkoutData.address.length > 10 &&
      checkoutData.name.length > 6 &&
      checkoutData.phn.length > 9 &&
      checkoutData.modeofpayment === "cod"
    ) {
      dispatch(
        orderedProductsActions.addProduct({
          id: data.id,
          image: data.image,
          price: data.price,
          quantity: localProductQuantity,
          title: data.title, // Assuming title is also needed
        })
      );
      setIsSuccessfullorder(true);
      SuccessFullNotify("Order placed successfully");
    } else {
      FailedNotify("Please fill all the details!");
    }
  };

  let content = <Loading />;

  if (data) {
    content = (
      <div className="flex flex-col items-center  px-4 py-1 ">
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
        <h1 className="text-orange-500 text-5xl font-semibold tracking-wide mt-[2rem] mb-[3rem]">
          CHECKOUT - PAGE
        </h1>

        <div className="reviewProduct   flex flex-col   justify-between   ">
          <p className="text-white text-3xl mb-2 ">Review your order</p>

          <div className="container  flex gap-5">
            <div className="demographic-info flex flex-col gap-3 ">
              <AddressForm />
              <CheckoutItemDetails
                data={data}
                AddProducts={AddProducts}
                RemoveProducts={RemoveProducts}
                localProductQuantity={localProductQuantity}
              />
            </div>
            <div className="ProductDetail border border-white/60 p-3 rounded ">
              <OrderSummary data={data} />
            </div>
          </div>
          <div className="flex justify-center md:mt-4 md:gap-4">
            <button
              onClick={() => {
                navigate("/product");
              }}
              className="bg-blue-500 text-white font-semibold p-3  rounded active:bg-blue-600"
            >
              Go to products
            </button>
            <button
              onClick={() => {
                handleAddProduct();
              }}
              className="bg-orange-500 text-white font-semibold p-3  rounded active:bg-orange-600"
            >
              Order now
            </button>
            {issuccessfullorder && (
              <button
                onClick={() => navigate("/order")}
                className="bg-emerald-500 text-white font-semibold p-3  rounded active:bg-emerald-600"
              >
                Go to orders
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  return content;
};

export default CheckOutPage;
