import { useLayoutEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../Redux/store";
import { checkoutActions } from "../Redux/Slices/checkoutSlice";
import { useNavigate } from "react-router-dom";
import { orderedProductsActions } from "../Redux/Slices/orderedProducts";
import { FailedNotify } from "../utils/ToastNotify";
import { ToastContainer } from "react-toastify";
import useTitleChangeHook from "../custom hooks/useTitleChangeHook";
import useAuthCheckerHook from "../custom hooks/useAuthCheckerHook";
import CartProductsCheckoutDemographic from "../components/CartProductsCheckoutDemographic";
import ProductReview from "../components/ProductReview";
import CheckoutOrderSummary from "../components/CheckoutOrderSummary";
import { ProductsCheckoutBtn } from "../components/ProductsCheckoutBtn";

const CartProductsCheckout = () => {
  const [isValidated, setIsValidated] = useState(false);

  useAuthCheckerHook();
  useTitleChangeHook({ title: "Checkout" });
  const {
    authentication: userData,
    cart: cartData,
    checkout: checkoutData,
  } = useAppSelector((state) => state);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (userData) {
      if (userData.address.length > 6 && checkoutData.address.length === 0) {
        dispatch(checkoutActions.changeAddress(userData.address));
      }
      if (userData.name.length > 6 && checkoutData.name.length === 0) {
        dispatch(checkoutActions.changeName(userData.name));
      }
      if (userData.phone.length > 6 && checkoutData.phn.length === 0) {
        dispatch(checkoutActions.changePhn(userData.phone));
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkoutData]);

  const handleAddProducts = () => {
    if (
      checkoutData.address.length >= 10 &&
      checkoutData.name.length >= 6 &&
      checkoutData.phn.length >= 9 &&
      checkoutData.modeofpayment === "cod"
    ) {
      cartData.items.forEach((item) => {
        dispatch(
          orderedProductsActions.addProduct({
            id: item.id,
            image: item.image,
            price: item.price,
            quantity: item.quantity,
            title: item.name,
            address: checkoutData.address,
            buyerName: checkoutData.name,
            phn: checkoutData.phn,
          })
        );
      });
      setIsValidated(true);
      dispatch(orderedProductsActions.setIsSuccessfullOrder(true));
    } else {
      FailedNotify("Please fill all the details!");
    }
  };

  useLayoutEffect(() => {
    if (cartData.items.length === 0) {
      navigate("/product");
    }
    dispatch(checkoutActions.reset());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleAddress(e: React.ChangeEvent<HTMLTextAreaElement>) {
    dispatch(checkoutActions.changeAddress(e.target.value));
  }
  function handleName(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(checkoutActions.changeName(e.target.value));
  }
  function handlePhn(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(checkoutActions.changePhn(e.target.value));
  }
  function handleModeOfPayment(e: React.ChangeEvent<HTMLSelectElement>) {
    dispatch(checkoutActions.changeModeOfPayment(e.target.value));
  }

  return (
    <div className="CartProductsCheckout flex flex-col w-full py-5 px-4 md:px-8 lg:px-12">
      {/* Toast */}
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

      <div className="wrapper flex flex-col justify-center items-center w-full gap-4">
        <div>
          <h1 className="text-orange-500 text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-wide my-3 sm:my-5">
            CHECKOUT - PAGE
          </h1>
        </div>
        <div className="w-full flex flex-col lg:flex-row justify-center gap-5 overflow-hidden">
          <div className="flex flex-col w-full lg:w-3/5 gap-5  ">
            {/* CartProductsCheckoutDemoGraphic Section */}
            <CartProductsCheckoutDemographic
              handleAddress={handleAddress}
              handleModeOfPayment={handleModeOfPayment}
              handleName={handleName}
              handlePhn={handlePhn}
              userData={userData}
            />
            {/* Products Review Section */}
            <ProductReview cartData={cartData} />
          </div>
          {/* Order Summary Section */}
          <CheckoutOrderSummary
            cartData={cartData}
            checkoutData={checkoutData}
            userData={userData}
          />
        </div>
        {/* Buttons Section */}
        <ProductsCheckoutBtn
          handleAddProducts={handleAddProducts}
          isValidated={isValidated}
        />
      </div>
    </div>
  );
};

export default CartProductsCheckout;
