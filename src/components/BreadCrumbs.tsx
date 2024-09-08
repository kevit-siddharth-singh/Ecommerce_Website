import { useNavigate } from "react-router-dom";

const BreadCrumbs: React.FC<{ product: string }> = ({ product }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className=" md:text-md  max-md:m-4  max-md:py-1  max-md:px-4 w-full ">
        <div className="w-full truncate   flex gap-2">
          <p className="cursor-pointer hover:text-white">Home</p>
          <span>&gt;</span>
          <a
            className="cursor-pointer hover:text-white"
            onClick={() => navigate("/product")}
          >
            Products
          </a>
          <span>&gt;</span>{" "}
          <p
            title={product}
            className="cursor-pointer hover:text-white  truncate"
          >
            {product}
          </p>
        </div>
      </div>
    </>
  );
};

export default BreadCrumbs;
