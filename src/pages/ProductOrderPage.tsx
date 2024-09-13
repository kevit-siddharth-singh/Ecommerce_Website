import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../Redux/store";
import useTitleChangeHook from "../custom hooks/useTitleChangeHook";
import { orderedProductsActions } from "../Redux/Slices/orderedProducts";
import EmptyOrderPage from "../components/EmptyOrderPage";
import useAuthCheckerHook from "../custom hooks/useAuthCheckerHook";
import ProductOrderPageContent from "../components/ProductOrderPageContent";

const ProductOrderPage = () => {
  useTitleChangeHook({ title: "Ordered products" });

  const orderedProducts = useAppSelector(
    (state) => state.orderedProducts.products
  );

  useAuthCheckerHook();

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  let content = <p>No orders stored</p>;

  if (orderedProducts) {
    content = <ProductOrderPageContent orderedProducts={orderedProducts} />;
  }

  return (
    <div className="">
      {orderedProducts.length > 0 ? (
        <div className="h-full w-full  flex flex-col justify-center items-center max-sm:py-3 max-sm:px-5  sm:py-5 sm:px-10 overflow-hidden">
          <div className="divider divider-neutral text-white">
            Y O U R - O R D E R S
          </div>

          {content}

          <div className="flex gap-5">
            <button
              onClick={() => dispatch(orderedProductsActions.clearOrder())}
              className="bg-red-500 active:bg-red-600 text-white font-semibold max-sm:text-sm max-sm:mt-10 p-2 rounded"
            >
              Delete Order History
            </button>
            <button
              onClick={() => navigate("/product")}
              className="bg-blue-500 active:bg-blue-600 text-white font-semibold max-sm:text-sm max-sm:mt-10 p-2 rounded"
            >
              Go back to products
            </button>
          </div>
        </div>
      ) : (
        <EmptyOrderPage />
      )}
    </div>
  );
};

export default ProductOrderPage;
