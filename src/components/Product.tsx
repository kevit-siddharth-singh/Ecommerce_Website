import { ProductType } from "../utils/ProductFetch";
import Rating from "./Rating.tsx";

const Product: React.FC<{ product: ProductType }> = (props) => {
  // console.log(props.product);
  return (
    <div className="flex flex-col w-[16rem] h-[21rem] p-2 rounded-box bg-white  items-center  ">
      <img
        className="h-[9rem] w-[10rem]  rounded-box"
        src={props.product.image}
        alt="img"
      />
      <div className="product-data flex flex-col w-[14rem] gap-2 m-2">
        <h1 className=" text-black font-bold  text-left truncate">
          {props.product.title}
        </h1>

        {/* Ratings Section  */}
        <div className="rating flex gap-2">
          <Rating rating={Math.ceil(props.product.rating.rate)} />
          <p className="text-sm">({props.product.rating.count})</p>
        </div>

        <p className="text-black capitalize text-[0.9rem]  truncate ">
          {props.product.description}
        </p>

        <div className="flex justify-between  pr-1">
          <p className="text-purple-500 font-bold">
            <strong>₹</strong> {props.product.price}
          </p>
          <p className="text-red-500 font-bold capitalize">
            {props.product.category}
          </p>
        </div>
      </div>

      <button className="bg-green-500 p-2 rounded-md text-white">
        Add to cart
      </button>
    </div>
  );
};

export default Product;
