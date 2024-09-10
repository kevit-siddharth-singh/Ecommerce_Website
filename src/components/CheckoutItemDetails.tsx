import React from "react";

import { FaMinus, FaPlus } from "react-icons/fa6";
import { ProductType } from "../utils/ProductFetch";

const CheckoutItemDetails: React.FC<{
  data: ProductType;
  localProductQuantity: number;
  AddProducts: () => void;
  RemoveProducts: () => void;
}> = ({ data, RemoveProducts, AddProducts, localProductQuantity }) => {
  let content = <p>Loading product details...</p>;

  if (data) {
    content = (
      <div>
        <p className="max-sm:text-lg w-full max-sm:font-semibold sm:text-3xl text-white">
          Product Selected
        </p>
        <div className="product border border-white/60  sm:p-3 rounded   flex sm:gap-3 max-sm:p-2 max-sm:gap-2">
          <img
            className="max-sm:w-[8rem] max-sm:h-[5rem] sm:w-[10rem]   md:w-1/6 md:h-2/3 rounded"
            src={data.image}
            alt={data.title}
          />
          <div className="info text-orange-400 flex flex-col max-sm:text-sm sm:gap-2">
            <p>
              Product name : <span className="text-white ">{data.title}</span>
            </p>

            <div className="flex items-center md:gap-2 lg:gap-2 ">
              <button
                onClick={RemoveProducts}
                className="flex justify-center bg-red-500  md:p-2 max-sm:p-1 lg:w-1/7 text-white lg:p-1 rounded"
              >
                <FaMinus />
              </button>
              <p className="flex justify-center text-white max-sm:p-1 max-sm:text-xl lg:text-sm lg:p-[0.2rem] font-semibold md:p-1 md:px-3 md:border lg:w-1/6 rounded">
                {localProductQuantity}
              </p>
              <button
                onClick={AddProducts}
                className="flex justify-center bg-emerald-400 md:p-2   max-sm:p-1 lg:w-1/7 text-white lg:p-1 rounded"
              >
                <FaPlus />
              </button>
            </div>

            <p>
              Rating : <span className="text-white">{data.rating.rate}/5</span>
            </p>
            <p>
              Price :{" "}
              <span className="text-emerald-500 font-medium">
                ₹{data.price}
              </span>
            </p>
            <p>
              Total Price :{" "}
              <span className="text-emerald-500 font-medium">
                ₹{data.price * localProductQuantity}
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="w-full">{content}</div>
    </>
  );
};

export default CheckoutItemDetails;
