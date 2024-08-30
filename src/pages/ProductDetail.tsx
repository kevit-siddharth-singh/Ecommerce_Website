import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  return (
    <>
      <div className="absolute  product-image bg-red-500 backdrop-blur-sm">
        <img src="" alt="" />
        <p>hey im sid {id}</p>
      </div>
    </>
  );
};

export default ProductDetail;
