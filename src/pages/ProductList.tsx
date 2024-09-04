import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../Redux/store";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "./../components/Sidebar";
import Product from "./../components/Product";
import { fetchProduct, ProductType } from "../utils/ProductFetch";
import { useQuery } from "@tanstack/react-query";
import Loading from "../components/Loading";
import NoProductFoundImg from "/noproductfound.png";
import { searchActions } from "../Redux/Slices/SearchSlice";
import PaginationComponent from "../components/PaginationComponent";

const ProductList = () => {
  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProduct,
  });

  const dispatch = useAppDispatch();

  // SearchTerm Logic
  const search = useAppSelector((state) => state.search.search);

  let content = <Loading />;

  // Logic for Making the Parent Container Div to be Relative or not
  let isRelative = undefined;

  if (search.length > 0) {
    isRelative = "relative";
  }

  if (data !== null && data !== undefined && search.length === 0) {
    content = (
      <ul className="grid grid-cols-5 place-items-center m-2 p-5 gap-10 ">
        {data.map((product: ProductType) => (
          <li key={product.id} className="cursor-pointer ">
            <Product product={product} />
          </li>
        ))}
      </ul>
    );
  } else {
    // Search term logic
    const filteredData = data?.filter((product: ProductType) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );

    if (filteredData && filteredData.length > 0) {
      content = (
        <ul className="grid grid-cols-5 place-items-center m-2 p-5 gap-10">
          {filteredData.map((product: ProductType) => (
            <li key={product.id} className="cursor-pointer">
              <Product product={product} />
            </li>
          ))}
        </ul>
      );
    } else {
      content = (
        <div className="absolute top-[50%] left-[40%] flex flex-col justify-center items-center">
          <img
            className="w-[35rem]"
            src={NoProductFoundImg}
            alt="No Product Found"
          />
          <p className="text-orange-500 text-3xl">
            No products found matching "{search}".
          </p>
          <button
            onClick={() => dispatch(searchActions.setSearchTerm(""))}
            className="m-2 border border-purple-500 rounded p-2 text-purple-400 hover:bg-purple-500 hover:text-white"
          >
            Clear Search
          </button>
        </div>
      );
    }
  }

  const navigate = useNavigate();
  const isAuthenticate = useAppSelector(
    (state) => state.authentication.isAuthenticate
  );

  useEffect(() => {
    if (!isAuthenticate) {
      navigate("/login");
    }
  });

  return (
    <div>
      <Header />
      <div className={`flex  ${isRelative}`}>
        <div className="sidebar-wrapper w-1/6">
          <Sidebar />
        </div>
        {search === "" && !data ? (
          <Loading />
        ) : (
          <div className="product-wrapper flex flex-col w-5/6 items-center">
            {content}
            {search.length === 0 ? <PaginationComponent /> : undefined}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
