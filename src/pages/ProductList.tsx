import { useEffect } from "react";
import { useAppSelector } from "../Redux/store";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

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

  return <div>
    <Header/>
  </div>;
};

export default ProductList;
