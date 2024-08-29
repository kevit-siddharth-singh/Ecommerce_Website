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
      <ul className="grid grid-cols-4">
        {data.map((product: ProductType) => (
          <li>
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
        <div className="product-wrapper  bg-blue-500 w-5/6">{content}</div>
      </div>
    </div>
  );
};

export default ProductList;
