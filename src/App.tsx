import { Routes, Route } from "react-router-dom";
import "./App.css";
import Signup from "./pages/Signup";
import ProductList from "./pages/ProductList";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";
import ProductDetail from "./pages/ProductDetail";
import CartPage from "./pages/CartPage";
import CheckOutPage from "./pages/CheckOutPage";
import ProductOrderPage from "./pages/ProductOrderPage";
import CartProductsCheckout from "./pages/CartProductsCheckout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/product" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/product/cart" element={<CartPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout/:Pid" element={<CheckOutPage />} />
        <Route path="/checkout/all" element={<CartProductsCheckout />} />
        <Route path="/order" element={<ProductOrderPage />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
