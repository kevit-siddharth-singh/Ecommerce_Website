import { ProductType } from "../utils/ProductFetch";

const CheckoutItemDetails: React.FC<{ data: ProductType }> = ({ data }) => {
  let content = <p>Loading product details...</p>;

  if (data) {
    content = (
      <div className="product flex gap-3">
        <img className="w-16 h-16 rounded" src={data.image} alt={data.title} />
        <div className="info text-orange-400 flex flex-col justify-between">
          <p>
            Product name : <span className="text-white">{data.title}</span>
          </p>
          <p>
            Rating : <span className="text-white">{data.rating.rate}/5</span>
          </p>
          <p>
            Price :{" "}
            <span className="text-emerald-500 font-medium">₹{data.price}</span>
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <p className="text-3xl text-white">Product Selected</p>
      <div className="border border-white/60 p-3 rounded ">{content}</div>
    </>
  );
};

export default CheckoutItemDetails;
