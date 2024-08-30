import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  return (
    <>
      <div className="product-image  ">
        <img src="" alt="" />
        <p>hey im sid {id}</p>
      </div>
    </>
  );
};

export default ProductDetail;
