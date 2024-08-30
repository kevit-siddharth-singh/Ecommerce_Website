import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import Loading from "../components/Loading";
import { getProductDetail } from "../utils/getProductDetail";

const ProductDetail = () => {
  const { id } = useParams();

  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: () => getProductDetail(id!),
  });

  return data ? (
    <div className="bg-red-500">
      <div className="product-image ">
        <img src={""} alt="" />
        hi
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default ProductDetail;
