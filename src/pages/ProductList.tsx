import { useEffect } from "react";
import { useAppSelector } from "../Redux/store";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "./../components/Sidebar";
import Product from "./../components/Product";

import { fetchProduct, ProductType } from "../utils/ProductFetch";
import { useQuery } from "@tanstack/react-query";

const ProductList = () => {
  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProduct,
  });

  let content;

  if (data) {
    content = (
      <ul className="grid grid-cols-5 place-items-center m-2 p-5 gap-10">
        {data.map((product: ProductType) => (
          <li className="cursor-pointer ">
            <Product product={product} />
          </li>
        ))}
      </ul>
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
    <div>
      <Header />
      <div className="flex">
        <div className="sidebar-wrapper  bg-red-500 w-1/6">
          <Sidebar />
        </div>
        <div className="product-wrapper   w-5/6">{content}</div>
      </div>
    </div>
  );
};

export default ProductList;
