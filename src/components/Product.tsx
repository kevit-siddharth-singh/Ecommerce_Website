import { ProductType } from "../utils/ProductFetch";

const Product: React.FC<{ product: ProductType }> = (props) => {
  return (
    <div className="flex flex-col w-10">
      <img src={props.product.image} alt="img"  />
      <h1>{props.product.title}</h1>
    </div>
  );
};

export default Product;
