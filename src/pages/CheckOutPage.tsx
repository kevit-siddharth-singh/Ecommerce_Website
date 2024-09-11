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
  let productSelected = null;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const allCartItems = useAppSelector((state) => state.cart.items);
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
  function CustomProduct(itemQuantity: number) {
    if (itemQuantity < 10 || itemQuantity > 0) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      setLocalProductQuantity((state) => (state = itemQuantity));
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

  if (Pid === "all") {
    productSelected = allCartItems;
  } else {
    productSelected = data;
  }

  // Handler to add product to order

  const handleAddProduct = () => {
    if (
      checkoutData.address.length >= 10 &&
      checkoutData.name.length >= 6 &&
      checkoutData.phn.length >= 9 &&
      checkoutData.modeofpayment === "cod"
    ) {
      dispatch(
        orderedProductsActions.addProduct({
          id: productSelected.id,
          image: productSelected.image,
          price: productSelected.price,
          quantity: localProductQuantity,
          title: productSelected.title, // Assuming title is also needed
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
      <div className="flex flex-col  items-center h-full w-full max-sm:justify-center max-sm:px-4 sm:px-4 sm:py-1 ">
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
        <h1 className="text-orange-500 max-sm:text-2xl max-sm:my-3 sm:text-5xl font-semibold tracking-wide sm:mt-[2rem] sm:mb-[3rem] ">
          CHECKOUT - PAGE
        </h1>

        <div className="reviewProduct w-full  flex flex-col items-center    justify-between">
          <p className="text-white max-sm:font-semibold  max-sm:text-lg max-sm:mb-1 sm:text-3xl sm:mb-2">
            Review your order
          </p>

          <div className="container max-sm:gap-3 flex sm:gap-5 max-sm:flex-col justify-center">
            <div className="demographic-info flex flex-col max-sm:gap-2 justify-center items-center  sm:gap-3 ">
              <AddressForm />
              <CheckoutItemDetails
                data={productSelected}
                AddProducts={AddProducts}
                RemoveProducts={RemoveProducts}
                CustomProduct={CustomProduct}
                localProductQuantity={localProductQuantity}
              />
            </div>
            <div className="ProductDetail  ">
              <p className="text-white  sm:hidden  sm:text-xl font-semibold sm:mb-2">
                Order summary
              </p>
              <OrderSummary data={data} quantity={localProductQuantity} />
            </div>
          </div>
          <div className="flex  justify-center w-full  max-sm:gap-3 max-sm:mt-5 md:mt-4 md:gap-4  sm:gap-10 sm:mt-3">
            <button
              onClick={() => {
                navigate("/product");
              }}
              className="bg-blue-500 text-white max-sm:text-sm max-sm:p-1  font-semibold sm:p-3  rounded active:bg-blue-600"
            >
              Go to products
            </button>
            <button
              onClick={() => {
                handleAddProduct();
              }}
              className="bg-orange-500 text-white max-sm:text-sm max-sm:p-1 font-semibold sm:p-3  rounded active:bg-orange-600"
            >
              Order now
            </button>
            {issuccessfullorder && (
              <button
                onClick={() => navigate("/order")}
                className="bg-emerald-500 text-white max-sm:text-sm max-sm:p-1 font-semibold sm:p-3  rounded active:bg-emerald-600"
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
