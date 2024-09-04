import { useNavigate } from "react-router-dom";
import { ProductType } from "../utils/ProductFetch";
import Rating from "./Rating.tsx";
import { useAppDispatch } from "../Redux/store.ts";
import { cartActions } from "../Redux/Slices/cartSlice.ts";

// React Icons
import { MdOutlineShoppingCart } from "react-icons/md";

const Product: React.FC<{ product: ProductType }> = (props) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <div
      onClick={() => navigate(`/product/${props.product.id}`)}
      className="flex flex-col w-[16rem] h-[21rem] p-2 px-4  rounded-box bg-white  items-center hover:translate-y-[-10px] transition ease-in-out "
    >
      <img
        className="h-[9rem] w-[10rem] p-1 rounded-box hover:scale-105 transition ease-in-out hover:drop-shadow-2xl "
        src={props.product.image}
        alt="img"
      />
      <div className="product-data flex flex-col w-[14rem] gap-2 m-2">
        <h1 className=" text-black text-lg  text-left truncate">
          {props.product.title}
        </h1>

        {/* Ratings Section  */}
        <div className="rating flex gap-2">
          <Rating rating={Math.ceil(props.product.rating.rate)} />
          <p className="text-sm">({props.product.rating.count})</p>
        </div>

        <div className="flex  justify-between  pr-1">
          <div className="flex  text-black text-3xl font-bold">
            <strong>₹</strong> {props.product.price}
            <p className="text-sm line-through text-red-500 mx-2">
              ₹{(props.product.price + Math.random() * 100).toFixed(2)}
            </p>
          </div>
        </div>
      </div>

      <div className="product-btn flex  w-full justify-between">
        <button
          onClick={(e) => {
            e.stopPropagation();
            dispatch(
              cartActions.addItemToCart({
                id: props.product.id,
                name: props.product.title,
                price: props.product.price,
                image: props.product.image,
                quantity: 1,
              })
            );
          }}
          className="bg-green-500 w-2/4 p-[0.37rem] rounded-md text-white transition ease-in-out hover:bg-green-600 "
        >
          <div className="flex justify-center items-center gap-1 text-base">
            <MdOutlineShoppingCart />
            <p className="">Add to cart</p>
          </div>
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            navigate("/checkout");
          }}
          className="flex justify-center bg-orange-500 w-1/4   p-[0.35rem] px-10 rounded-md text-white  transition ease-in-out hover:bg-orange-600 "
        >
          Buy
        </button>
      </div>
    </div>
  );
};

export default Product;
