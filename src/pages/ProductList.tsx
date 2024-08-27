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
      <Sidebar />
      <Product />
    </div>
  );
};

export default ProductList;
