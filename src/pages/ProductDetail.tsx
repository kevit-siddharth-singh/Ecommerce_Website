import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { getProductDetail } from "../utils/getProductDetail";
import BreadCrumbs from "../components/BreadCrumbs";
import Rating from "../components/Rating";
import CartActionBtns from "../components/CartActionBtns";
import { FiShoppingCart } from "react-icons/fi";
import ProductCarousel from "../components/ProductCarousel";
import { useAppSelector } from "../Redux/store";

const ProductDetail = () => {
  const { id } = useParams();
  const isAuthenticate = useAppSelector(
    (state) => state.authentication.isAuthenticate
  );
  const navigate = useNavigate();
  const { data } = useQuery({
    queryKey: ["products", { productId: id }],
    queryFn: () => getProductDetail(id!),
  });

  if (data) {
    document.title = data.title;
  }

  function GoToCart() {
    if (isAuthenticate) {
      navigate("/product/cart");
    } else {
      navigate("/login");
    }
  }

  return data ? (
    <div className="w-full h-full   max-md:p-2 max-md:flex-col  md:p-2 lg:p-10 flex justify-center md:gap-5  lg:gap-5 xl:gap-24   max-md:items-center   max-md:overflow-hidden ">
      <div className=" md:hidden my-2 mb-5 w-full  flex flex-col-reverse justify-between items-center ">
        <BreadCrumbs product={data.title} />
        <div className="flex justify-between  items-center w-full px-5">
          <p className="text-2xl font-semibold">SKY SHOP</p>
          <button
            onClick={GoToCart}
            className="text-white text-2xl  bg-red-500 p-2 px-4  max-md:p-3  active:bg-red-600 rounded"
          >
            <FiShoppingCart className="max-md:h-5 max-md:w-5  " />
          </button>
        </div>
      </div>

      {/* Can use Slice Method here for getting desired length String for Product title */}
      <div className="product-image md:w-[45rem]  md:h-[30rem] lg:w-[25rem] lg:h-[30rem] xl:w-[30rem]   xl:h-[40rem]   max-md:w-4/5 max-sm:w-4/5     md:p-5 w-full ">
        {/* <img className=" rounded-box  h-full w-full" src={data.image} alt="" /> */}
        <ProductCarousel img={data.image} />
      </div>

      <div className=" md:w-[45rem] max-md:w-full max-md:px-4 flex flex-col gap-5">
        <div className=" max-md:hidden  flex justify-between items-center">
          <BreadCrumbs product={data.title} />
          <button
            title="Go to cart"
            onClick={GoToCart}
            className="text-white text-2xl  bg-red-500 md:px-3 md:py-2 lg:p-2 lg:px-4  active:bg-red-600 rounded"
          >
            <FiShoppingCart className="md:h-5 lg:h-6" />
          </button>
        </div>
        <div className="product-title cursor-pointer text-white md:text-5xl max-md:text-3xl max-md:mt-5 lg:text-5xl lg:p-1 font-bold   ">
          {data.title}
        </div>
        <div className="product-description max-md:text-sm lg:text-xl lg:mb-5">
          {data.description}
        </div>
        <div className="max-md:flex max-md:justify-between ">
          <div className="rating  lg:mx-3 flex flex-col lg:gap-2 ">
            <p className="text-white  lg:text-2xl font-semibold">
              Ratings <span className="max-md:hidden">:</span>
            </p>
            <Rating rating={Math.ceil(data.rating.rate)} />
          </div>
          <div className="category lg:mx-3">
            <p className=" text-white lg:text-2xl font-semibold">
              Category <span className="max-md:hidden">:</span>
            </p>
            <p className="text-emerald-400">{data.category}</p>
          </div>
        </div>
        <div className="specification flex  justify-between bg-zinc-900 p-4 rounded-md">
          <div className="color">
            <p className="color text-white lg:text-2xl font-semibold">Color</p>
            <p className="">White</p>
          </div>
          <div className="size">
            <p className="size text-white lg:text-2xl font-semibold">Size</p>
            <p>40</p>
          </div>
          <div className="price flex items-end text-emerald-400 lg:text-4xl  content-center">
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
