import { useNavigate } from "react-router-dom";
import { Product } from "../Redux/Slices/orderedProducts";

interface ProductOrderPageContentType {
  orderedProducts: Product[];
}

const ProductOrderPageContent: React.FC<ProductOrderPageContentType> = ({
  orderedProducts,
}) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="h-full w-full flex flex-col max-sm:gap-8 sm:gap-5 ">
        {orderedProducts.map((product) => (
          <div
            key={product.id}
            className=" flex justify-between max-sm:flex-col max-sm:gap-3"
          >
            <div className="flex max-sm:gap-4 sm:gap-3">
              <div className="max-sm:w-1/4 max-sm:h-1/4   md:w-[6rem] md:h-[6rem] rounded overflow-hidden bg-white hover:scale-105 ease-in-out duration-300 hover:shadow-md">
                <img
                  onClick={() => navigate("/product/" + product.id)}
                  className="object-contain cursor-pointer "
                  src={product.image}
                  alt={product.image}
                  title={product.title}
                />
              </div>
              <div className=" max-sm:w-[70%] ">
                <p className="max-sm:text-sm max-sm:truncate sm:text-xl font-semibold text-white ">
                  {product.title}
                </p>
                <p className="font-semibold max-sm:text-sm  max-sm:hidden">
                  <span>
                    Name :{" "}
                    <span className="text-white">{product.buyerName} | </span>{" "}
                  </span>
                  Price :
                  <span className="text-emerald-400"> ₹{product.price}</span>
                </p>
                <p className="max-sm:text-sm  font-semibold ">
                  <span>
                    Phn : <span className="text-white">{product.phn} | </span>{" "}
                  </span>
                  <br className="sm:hidden" />
                  Total items :
                  <span className="text-emerald-400"> {product.quantity}</span>
                </p>

                <p className="max-sm:text-sm font-semibold ">
                  <span>
                    Addr :{" "}
                    <span className="text-white">{product.address} | </span>{" "}
                  </span>
                  <br className="sm:hidden" />
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
    </>
  );
};

export default ProductOrderPageContent;
