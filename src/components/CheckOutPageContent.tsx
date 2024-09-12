import { ToastContainer } from "react-toastify";
import AddressForm from "./AddressForm";
import CheckoutItemDetails from "./CheckoutItemDetails";
import OrderSummary from "./OrderSummary";
import { useNavigate } from "react-router-dom";
import { ProductType } from "../utils/ProductFetch";

interface CheckOutPageContentType {
  handleAddProduct: () => void;
  AddProducts: () => void;
  CustomProduct: (itemQuantity: number) => void;
  issuccessfullorder: boolean;
  setIsSuccessfullorder: (state: boolean) => void;
  RemoveProducts: () => void;
  localProductQuantity: number;
  data: ProductType;
  productSelected: ProductType;
}

const CheckOutPageContent: React.FC<CheckOutPageContentType> = ({
  handleAddProduct,
  AddProducts,
  CustomProduct,
  issuccessfullorder,
  RemoveProducts,
  localProductQuantity,
  data,
  productSelected,
}) => {
  const navigate = useNavigate();
  return (
    <>
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
        <h1 className="text-orange-500 max-sm:text-2xl max-sm:my-3 sm:text-5xl font-semibold tracking-wide  sm:mt-[2rem] sm:mb-[3rem] ">
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
    </>
  );
};

export default CheckOutPageContent;
