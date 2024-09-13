import { useAppSelector } from "../Redux/store";
import useTitleChangeHook from "../custom hooks/useTitleChangeHook";
import EmptyOrderPage from "../components/EmptyOrderPage";
import useAuthCheckerHook from "../custom hooks/useAuthCheckerHook";
import ProductOrderPageContent from "../components/ProductOrderPageContent";
import ProductOrderPageBtn from "../components/ProductOrderPageBtn";

const ProductOrderPage = () => {
  useTitleChangeHook({ title: "Ordered products" });
  const orderedProducts = useAppSelector(
    (state) => state.orderedProducts.products
  );
  useAuthCheckerHook();

  let content = <p>No orders stored</p>;
  if (orderedProducts) {
    content = <ProductOrderPageContent orderedProducts={orderedProducts} />;
  }

  return (
    <div className="">
      {orderedProducts.length > 0 ? (
        <div className="h-full w-full  flex flex-col justify-center items-center max-sm:py-3 max-sm:px-5  sm:py-5 sm:px-10 overflow-hidden">
          <div className="divider md:pb-5 divider-neutral text-white">
            Y O U R - O R D E R S
          </div>
          {content}
          <ProductOrderPageBtn />
        </div>
      ) : (
        <EmptyOrderPage />
      )}
    </div>
  );
};

export default ProductOrderPage;
