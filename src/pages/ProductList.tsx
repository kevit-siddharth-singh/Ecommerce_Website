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
  const currentPage = useAppSelector((state) => state.pagination.currentPage);

  const { data } = useQuery({
    queryKey: ["products", currentPage],
    queryFn: () => fetchProduct(currentPage),
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
      <div className="flex flex-wrap md:gap-10 max-sm:gap-10 gap-14 w-full my-5 justify-center items-center">
        {filteredData.map((product: ProductType) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    );
  } else {
    content = (
      <div className="flex flex-col w-full h-full overflow-hidden  justify-center items-center max-sm:gap-4 ">
        <div className="img md:w-1/4  max-sm:w-4/5 ">
          <img
            className="w-full cover"
            src={NoProductFoundImg}
            alt="No Product Found"
          />
        </div>
        <p className="text-orange-500 text-center md:text-3xl  sm:shrink-0">
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
    <div className="w-full sm:h-screen max-sm:h-screen h-full overflow-hidden  ">
      <Header />
      <div
        className={`flex ${isRelative} max-sm:justify-between   max-md:flex-col h-full w-full `}
      >
        <div className="sidebar-wrapper max-sm:w-full  max-sm:h-1/3 md:w-1/6 w-full sm:flex">
          <Sidebar />
        </div>
        {search === "" && !data ? (
          <Loading />
        ) : (
          <div className="product-wrapper flex flex-col md:w-5/6 w-full h-full  items-center sm:gap-5   ">
            <div className="w-full flex items-start  md:h-[80%] max-sm:h-2/3  overflow-y-scroll  ">
              {content}
            </div>
            <div className="w-full max-sm:h-1/3   flex justify-center items-center">
              {search.length === 0 ? <PaginationComponent /> : undefined}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
