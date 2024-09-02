import { useNavigate } from "react-router-dom";

const BreadCrumbs: React.FC<{ product: string }> = ({ product }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="breadcrumbs text-md px-1 py-0 ">
        <ul>
          <li>
            <p className="cursor-pointer hover:text-white">Home</p>
          </li>
          <li>
            <a
              className="cursor-pointer hover:text-white"
              onClick={() => navigate("/product")}
            >
              Products
            </a>
          </li>
          <li className="cursor-pointer hover:text-white">{product.slice(0, 25)}..</li>
        </ul>
      </div>
    </>
  );
};

export default BreadCrumbs;
