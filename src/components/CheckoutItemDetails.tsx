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
      <div className="product flex gap-3">
        <img
          className="md:w-1/6 md:h-2/3 rounded"
          src={data.image}
          alt={data.title}
        />
        <div className="info text-orange-400 flex flex-col gap-2">
          <p>
            Product name : <span className="text-white">{data.title}</span>
          </p>

          <div className="flex items-center lg:gap-2">
            <button
              onClick={RemoveProducts}
              className="flex justify-center bg-red-500 lg:w-1/7 text-white lg:p-1 rounded"
            >
              <FaMinus />
            </button>
            <p className="flex justify-center text-white lg:text-sm lg:p-[0.1rem] font-medium border lg:w-1/6 rounded">
              {localProductQuantity}
            </p>
            <button
              onClick={AddProducts}
              className="flex justify-center bg-emerald-400 lg:w-1/7 text-white lg:p-1 rounded"
            >
              <FaPlus />
            </button>
          </div>

          <p>
            Rating : <span className="text-white">{data.rating.rate}/5</span>
          </p>
          <p>
            Price :{" "}
            <span className="text-emerald-500 font-medium">₹{data.price}</span>
          </p>
          <p>
            Total Price :{" "}
            <span className="text-emerald-500 font-medium">
              ₹{data.price * localProductQuantity}
            </span>
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <p className="text-3xl text-white">Product Selected</p>
      <div className="border border-white/60 p-3 rounded">{content}</div>
    </>
  );
};

export default CheckoutItemDetails;
