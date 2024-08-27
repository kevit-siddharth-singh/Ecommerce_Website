import { useEffect } from "react";
import { useAppSelector } from "../Redux/store";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "./../components/Sidebar";
import Product from "./../components/Product";

const ProductList = () => {
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
        <div className="product-wrapper  bg-blue-500 w-5/6">
          <Product />
        </div>
      </div>
    </div>
  );
};

export default ProductList;
