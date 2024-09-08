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
import useTitleChangeHook from "../custom hooks/useTitleChangeHook";

const ProductList = () => {
  // Custom Hook For Changing Title
  useTitleChangeHook({ title: "S K Y - S H O P" });

  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProduct,
  });

  const selectedCategory = useAppSelector(
    (state) => state.category.selectedCategory
  );

  const search = useAppSelector((state) => state.search.search);

  const dispatch = useAppDispatch();

  // Logic for Filtering Products based on Selected Category and Search Term
  const filteredData = data?.filter((product: ProductType) => {
    // Check if the product's category matches the selected categories (if any)
    const matchesCategory =
      selectedCategory.length === 0 ||
      selectedCategory.includes(product.category);

    // Check if the product title matches the search term
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  let content = <Loading />;

  // Logic for Making the Parent Container Div to be Relative or not
  let isRelative = undefined;

  if (search.length > 0) {
    isRelative = "relative";
  }

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
      <div className="flex flex-col w-full overflow-hidden  justify-center items-center h-full ">
        <div className="img w-1/4  ">
          <img
            className="w-full cover"
            src={NoProductFoundImg}
            alt="No Product Found"
          />
        </div>
        <p className="text-orange-500 text-3xl shrink-0">
          No products found matching "{search}".
        </p>
        <button
          onClick={() => dispatch(searchActions.setSearchTerm(""))}
          className="m-2 border  border-purple-500 rounded p-2 text-purple-400 hover:bg-purple-500 hover:text-white shrink-0"
        >
          Clear Result
        </button>
      </div>
    );
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
    <div className="w-full h-screen overflow-hidden  ">
      <Header />
      <div className={`flex ${isRelative} max-md:flex-col h-full w-full`}>
        <div className="sidebar-wrapper md:w-1/6 w-full max-md:flex">
          <Sidebar />
        </div>
        {search === "" && !data ? (
          <Loading />
        ) : (
          <div className="product-wrapper flex flex-col w-5/6  items-center  relative">
            {content}
            {search.length === 0 ? <PaginationComponent /> : undefined}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
