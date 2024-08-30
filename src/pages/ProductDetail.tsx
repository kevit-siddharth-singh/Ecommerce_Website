import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import Loading from "../components/Loading";
import { getProductDetail } from "../utils/getProductDetail";
import BreadCrumbs from "../components/BreadCrumbs";

const ProductDetail = () => {
  const { id } = useParams();

  const { data } = useQuery({
    queryKey: ["products", { productId: id }],
    queryFn: () => getProductDetail(id!),
  });

  return data ? (
    <div className="p-2">
      <BreadCrumbs />
      <div className="product-image ">
        <img src={""} alt="" />
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default ProductDetail;
