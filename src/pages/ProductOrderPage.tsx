import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import { useAppSelector } from "../Redux/store";
import useTitleChangeHook from "../custom hooks/useTitleChangeHook";

const ProductOrderPage = () => {

  useTitleChangeHook({title: "Ordered products"});


  const orderedProducts = useAppSelector(
    (state) => state.orderedProducts.products
  );

  const navigate = useNavigate();

  let content = <Loading />;

  if (orderedProducts) {
    content = (
      <div className="h-full w-full flex flex-col max-sm:gap-8 sm:gap-5 ">
        {orderedProducts.map((product) => (
          <div
            key={product.id}
            className=" flex justify-between max-sm:flex-col max-sm:gap-3"
          >
            <div className="flex max-sm:gap-4 sm:gap-3">
              <div className="max-sm:w-1/4 max-sm:h-1/4   md:w-[6rem] rounded overflow-hidden">
                <img
                  onClick={() => navigate("/product/" + product.id)}
                  className="cursor-pointer"
                  src={product.image}
                  alt={product.image}
                />
              </div>
              <div className=" max-sm:w-[70%] ">
                <p className="max-sm:text-sm max-sm:truncate sm:text-xl font-semibold text-white ">
                  {product.title}
                </p>
                <p className="font-semibold max-sm:text-sm  max-sm:hidden">
                  Price :
                  <span className="text-emerald-400"> ₹{product.price}</span>
                </p>
                <p className="max-sm:text-sm  font-semibold ">
                  Total items :
                  <span className="text-emerald-400"> {product.quantity}</span>
                </p>

                <p className="max-sm:text-sm font-semibold ">
                  Total Price :
                  <span className="text-emerald-400">
                    {" "}
                    ₹{product.price * product.quantity}
                  </span>
                </p>
              </div>
            </div>
            <div className=" max-sm:flex max-sm:justify-between">
              <button className="flex text-white rounded sm:hidden max-sm:p-1 max-sm:text-sm sm:p-2 font-semibold bg-emerald-500 hover:bg-emerald-600">
                ₹ {product.price}
              </button>
              <button
                onClick={() => navigate(`/checkout/${product.id}`)}
                className="flex text-white rounded max-sm:p-1 max-sm:text-sm sm:p-2 font-semibold bg-orange-500 hover:bg-orange-600"
              >
                Buy again
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="h-full w-full  flex flex-col justify-center items-center max-sm:py-3 max-sm:px-5  sm:py-5 sm:px-10 overflow-hidden">
      <div className="divider divider-neutral text-white">
        Y O U R - O R D E R S
      </div>
      {content}
      <div>
        <button
          onClick={() => navigate("/product")}
          className="bg-blue-500 active:bg-blue-600 text-white font-semibold max-sm:text-sm max-sm:mt-10 p-2 rounded"
        >
          Go back to products
        </button>
      </div>
    </div>
  );
};

export default ProductOrderPage;
