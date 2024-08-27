import { Routes, Route } from "react-router-dom";
import "./App.css";
import Signup from "./pages/Signup";
import ProductList from "./pages/ProductList";

function App() {
  return (
    <>
      <Routes>
        <Route path="/signup" index={true} element={<Signup />} />
        <Route path="/product" element={<ProductList />} />
        <Route path="" element={""} />
        <Route path="" element={""} />
        <Route path="" element={""} />
      </Routes>
    </>
  );
}

export default App;
