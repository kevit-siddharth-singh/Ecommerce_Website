import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { orderedProductsActions } from "../Redux/Slices/orderedProducts";

const ProductOrderPageBtn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
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
    </>
  );
};

export default ProductOrderPageBtn;
