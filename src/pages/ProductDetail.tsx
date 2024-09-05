import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { getProductDetail } from "../utils/getProductDetail";
import BreadCrumbs from "../components/BreadCrumbs";
import Rating from "../components/Rating";
import CartActionBtns from "../components/CartActionBtns";
import { FiShoppingCart } from "react-icons/fi";
import ProductCarousel from "../components/ProductCarousel";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data } = useQuery({
    queryKey: ["products", { productId: id }],
    queryFn: () => getProductDetail(id!),
  });

  return data ? (
    <div className="m-10  flex justify-center  gap-24  ">
      {/* Can use Slice Method here for getting desired length String for Product title */}
      <div className="product-image h-[50rem] w-[40rem]  p-5 ">
        {/* <img className=" rounded-box  h-full w-full" src={data.image} alt="" /> */}
        <ProductCarousel img={data.image} />
      </div>
      <div className="w-[45rem] product-data flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <BreadCrumbs product={data.title} />
          <button
            onClick={() => navigate("/product/cart")}
            className="text-white text-2xl  bg-red-500 p-2 px-4  active:bg-red-600 rounded"
          >
            <FiShoppingCart />
          </button>
        </div>
        <div className="product-title cursor-pointer text-white text-5xl p-1 font-bold truncate  ">
          {data.title}
        </div>
        <div className="product-description text-xl mb-5">
          {data.description}
        </div>
        <div className="rating mx-3 flex flex-col gap-2 ">
          <p className="text-white text-2xl font-semibold">Ratings :</p>
          <Rating rating={Math.ceil(data.rating.rate)} />
        </div>
        <div className="category mx-3">
          <p className=" text-white text-2xl font-semibold">Category :</p>
          <li className="text-emerald-400">{data.category}</li>
        </div>
        <div className="specification flex  justify-between bg-zinc-900 p-4 rounded-md">
          <div className="color">
            <p className="color text-white text-2xl font-semibold">Color</p>
            <p className="">White</p>
          </div>
          <div className="size">
            <p className="size text-white text-2xl font-semibold">Size</p>
            <p>40</p>
          </div>
          <div className="price text-emerald-400 text-4xl  content-center">
            <p>₹ {data.price}</p>
          </div>
        </div>
        <CartActionBtns
          id={data.id}
          name={data.title}
          price={data.price}
          quantity={1}
          image={data.image}
        />
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default ProductDetail;
