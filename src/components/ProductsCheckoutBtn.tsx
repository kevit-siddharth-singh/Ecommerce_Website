import { useNavigate } from "react-router-dom";

interface ProductsCheckoutBtnType {
  handleAddProducts: () => void;
  isValidated: boolean;
}

export const ProductsCheckoutBtn: React.FC<ProductsCheckoutBtnType> = ({
  handleAddProducts,
  isValidated,
}) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center gap-5 mt-4 max-sm:flex-row ">
        <button
          onClick={() => navigate("/product")}
          className="bg-blue-500 active:bg-blue-600 max-sm:p-1 max-sm:px-2 max-sm:text-sm p-3 rounded text-white font-semibold w-full md:w-auto"
        >
          Go to products
        </button>
        <button
          onClick={handleAddProducts}
          className="bg-orange-500 active:bg-orange-600  max-sm:py-3 max-sm:px-2 max-sm:text-md p-3 rounded text-white font-semibold w-full md:w-auto"
        >
          Buy now
        </button>
        <button
          onClick={() => navigate("/order")}
          className={`bg-emerald-500 active:bg-emerald-600 max-sm:p-1 max-sm:px-2 max-sm:text-sm p-3 rounded text-white font-semibold ${
            isValidated ? "block" : "hidden"
          } w-full md:w-auto`}
        >
          Go to Orders
        </button>
      </div>
    </>
  );
};
