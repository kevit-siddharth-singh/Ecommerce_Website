import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import { useAppSelector } from "../Redux/store";

const ProductOrderPage = () => {
  const orderedProducts = useAppSelector(
    (state) => state.orderedProducts.products
  );

  const navigate = useNavigate();

  let content = <Loading />;

  if (orderedProducts) {
    content = (
      <div className="h-full w-full flex flex-col gap-5 ">
        {orderedProducts.map((product) => (
          <div key={product.id} className=" flex gap-3">
            <div className="md:w-[6rem] rounded overflow-hidden">
              <img src={product.image} alt={product.image} />
            </div>
            <div className="">
              <p className="text-xl font-semibold text-white">
                {product.title}
              </p>
              <p className="font-semibold">
                Price :
                <span className="text-emerald-400"> ₹{product.price}</span>
              </p>
              <p className=" font-semibold ">
                Total items :
                <span className="text-emerald-400"> {product.quantity}</span>
              </p>

              <p className="font-semibold">
                Total Price :
                <span className="text-emerald-400">
                  {" "}
                  ₹{product.price * product.quantity}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="h-full w-full  flex flex-col justify-center items-center py-5 px-10 overflow-hidden">
      <div className="divider divider-neutral text-white">
        Y O U R - O R D E R S
      </div>
      {content}
      <div>
        <button
          onClick={() => navigate("/product")}
          className="bg-blue-500 text-white font-semibold p-2 rounded"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ProductOrderPage;
