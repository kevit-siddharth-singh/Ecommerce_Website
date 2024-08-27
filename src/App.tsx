import { Routes, Route } from "react-router-dom";
import "./App.css";
import Signup from "./pages/Signup";
import ProductList from "./pages/ProductList";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/signup" index={true} element={<Signup />} />
        <Route path="/product" element={<ProductList />} />
        <Route path="/login" element={<Login />} />
        <Route path="" element={""} />
        <Route path="" element={""} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
