// YourComponent.js
import ProductDetailContent from "../components/ProductDetailContent";
import {
  useQuery,
  useNavigate,
  useParams,
  Loading,
  getProductDetail,
  useAppSelector,
} from "../Imports/ProductDetailImports";

// Your component logic

const ProductDetail = () => {
  const { id } = useParams();
  const isAuthenticate = useAppSelector(
    (state) => state.authentication.isAuthenticate
  );
  const navigate = useNavigate();
  const { data } = useQuery({
    queryKey: ["products", { productId: id }],
    queryFn: () => getProductDetail(id!),
  });

  if (data) {
    document.title = data.title;
  }

  function GoToCart() {
    if (isAuthenticate) {
      navigate("/product/cart");
    } else {
      navigate("/login");
    }
  }

  return data ? (
    <ProductDetailContent data={data} GoToCart={GoToCart} />
  ) : (
    <Loading />
  );
};

export default ProductDetail;
