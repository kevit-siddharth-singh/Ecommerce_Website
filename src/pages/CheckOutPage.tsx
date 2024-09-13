import { useQuery } from "@tanstack/react-query";
import { useAppDispatch, useAppSelector } from "../Redux/store";
import { getProductDetail } from "../utils/getProductDetail";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import useAuthCheckerHook from "../custom hooks/useAuthCheckerHook";
import { orderedProductsActions } from "../Redux/Slices/orderedProducts";
import { useState } from "react";
import { FailedNotify, SuccessFullNotify } from "../utils/ToastNotify";
import useTitleChangeHook from "../custom hooks/useTitleChangeHook";
import CheckOutPageContent from "../components/CheckOutPageContent";
import Redirect from "../components/Redirect";

const CheckOutPage = () => {
  let productSelected = null;

  const dispatch = useAppDispatch();

  useAuthCheckerHook();

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
      setLocalProductQuantity(itemQuantity);
    }
  }
  // Custom hook for Auth Check
  useAuthCheckerHook();
  // Custom hook for Title Change
  useTitleChangeHook({ title: "checkout page" });

  let content = <Loading />;
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
          title: productSelected.title,
          quantity: localProductQuantity,
          address: checkoutData.address,
          buyerName: checkoutData.name,
          phn: checkoutData.phn,
        })
      );
      setIsSuccessfullorder(true);
      SuccessFullNotify("Order placed successfully");
    } else {
      FailedNotify("Please fill all the details!");
    }
  };

  if (data && !issuccessfullorder) {
    content = (
      <CheckOutPageContent
        data={data}
        handleAddProduct={handleAddProduct}
        AddProducts={AddProducts}
        CustomProduct={CustomProduct}
        issuccessfullorder={issuccessfullorder}
        RemoveProducts={RemoveProducts}
        localProductQuantity={localProductQuantity}
        productSelected={productSelected}
        setIsSuccessfullorder={setIsSuccessfullorder}
      />
    );
  } else {
    if (issuccessfullorder) {
      return <Redirect />;
    }
    return <Loading />;
  }

  return content;
};

export default CheckOutPage;
