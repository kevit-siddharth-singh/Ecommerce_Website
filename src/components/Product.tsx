import { fetchProduct, ProductType } from "../utils/ProductFetch";

const Product = () => {
  const data = fetchProduct();
  console.log({ data });
  return (
    <div>
      <h1>Recommended</h1>
    </div>
  );
};

export default Product;
